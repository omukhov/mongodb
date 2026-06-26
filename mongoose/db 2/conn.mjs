import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MONGO_URI);
  const client = mongoose.connection.getClient();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
