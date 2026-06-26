import { MongoClient } from "mongodb";

const connectionStr = process.env.MONGO_URI;

const client = new MongoClient(connectionStr);

let connection;

try {
  connection = await client.connect();
  console.log("Mongodb connect");
} catch (e) {
  console.error(e);
}

const db = connection.db("sample_training");

export default db;
