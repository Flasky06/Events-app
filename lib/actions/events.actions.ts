"use server";
import { revalidatePath } from "next/cache";
import { CreateEventParams, GetAllEventsParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Event from "../database/models/event.model";
import User from "../database/models/user.model";
import { HandPlatterIcon } from "lucide-react";
import Category from "../database/models/category.model";
import { EventEmitterAsyncResource } from "events";

const populateEvent = async (query: any) => {
  return query
    .populate({
      path: "organizer",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({
      path: "category",
      model: Category,
      select: "_id ,name",
    });
};

// CREATE
export async function createEvent({ userId, event, path }: CreateEventParams) {
  console.log(userId);

  console.log("event", event);

  try {
    await connectToDatabase();
    console.log("2", userId);

    const organizer = await User.findById(userId);
    console.log("organizer 1");

    console.log("organizer", organizer);

    if (!organizer) {
      throw new Error("Organizer not found");
    }

    console.log({ categoryId: event.categoryId, organizerId: userId });

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    // revalidatePath(path);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    console.log(error);
    handleError(error);
  }
}

export const getEventsById = async (eventId: string) => {
  try {
    await connectToDatabase();

    const event = await populateEvent(Event.findById(eventId));

    if (!event) {
      throw new Error("Event not found");
    }
    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    handleError(error);
  }
};

// Get all Events
export const getAllEvents = async ({
  query,
  limit = 6,
  page,
  category,
}: GetAllEventsParams) => {
  try {
    await connectToDatabase();

    const conditions = {};

    const eventsQuery = await Event.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(0)
      .limit(limit);

    const events = await populateEvent(eventsQuery);

    console.log(events);
    const eventsCount = await Event.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(events)),
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};
