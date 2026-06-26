// setup our environment variables
import "dotenv/config";

import express from "express";

// bring in our database instance
import db from "./db.js";

// bring in a special function to change the datatype
import { ObjectId } from "mongodb";

const app = express();

const port = 3000;

// parse the data to JSON (for POST and PUT requests)
app.use(express.json());

// POST route for creating a new document
app.post("/", async (req, res) => {
  const collection = await db.collection("posts");
  const result = await collection.insertOne(req.body);

  res.status(201).json(result);
});

// GET the first three posts where the title is "Bill of Rights"
app.get("/", async (req, res) => {
  const collection = await db.collection("posts");
  const query = { title: "Bill of Rights" };
  const result = await collection.find(query).limit(3).toArray();

  res.status(200).json(result);
});

// GET a post by id
app.get("/:id", async (req, res) => {
  const collection = await db.collection("posts");
  const query = { _id: new ObjectId(req.params.id) };
  const result = await collection.findOne(query);

  res.status(200).json(result);
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
