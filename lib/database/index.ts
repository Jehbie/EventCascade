import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ?? "mongodb://localhost:27017/cascadedb";

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose
      .connect(MONGODB_URI, {
        dbName: "evently",
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose;
      });

  cached.conn = await cached.promise;

  return cached.conn;
};

export const registerModels = async () => {
  const { Event } = await import("./models/event.model");
  const { Category } = await import("./models/category.model");
  const { Order } = await import("./models/order.model");
  const { User } = await import("./models/user.model");

  await Event.findOne({});
  await User.findOne({});
  await Category.findOne({});
  await Order.findOne({});
};
