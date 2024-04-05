import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  try {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is missing");
    }

    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URI, {
        dbName: "clerkdb",
        bufferCommands: false,
      });

    cached.conn = await cached.promise;

    return cached.conn;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    // Optionally re-throw the error to propagate it upwards.
    throw error;
  }
};
