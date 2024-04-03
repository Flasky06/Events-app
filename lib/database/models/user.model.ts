import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  photo: { type: String, required: true },
});

const User = models.User || model("User", userSchema);

export default User;