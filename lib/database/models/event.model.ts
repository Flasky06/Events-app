import { models, model, Schema } from "mongoose";

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
});

const Event = models.Event || model("Event", eventSchema);

export default Event;
