import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.error(e);
  }
}

export default connectDB;
