"use server";

import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Event from "../database/models/event.model";
import User from "../database/models/user.model";

// CREATE
export async function createEvent({ userId, event }: CreateEventParams) {
  console.log("userId", userId);
  try {
    await connectToDatabase();

    const organizer = await User.findOne({ clerkId: userId });

    console.log("organizer", organizer);
    if (!organizer) throw new Error("Organizer not found");

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: organizer._id,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
}
