import { models, model, Schema } from "mongoose";

import { Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: String; name: string };
  organiser: { _id: string; firstname: string; lastname: string };
}

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: String, default: Date.now },
  imageUrl: { type: String, requred: true },
  startDateTime: { type: String, default: Date.now },
  endDateTime: { type: String, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "user" },
  organiser: { type: Schema.Types.ObjectId, ref: "user" },
});

const Event = models.Event || model("Event", eventSchema);

export default Event;
