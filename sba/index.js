import express from "express";
import dotenv from "dotenv";
import connectDB from "./data/db.js";
import movies from "./routes/movies.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json()); //register express built in json

app.use(
  express.urlencoded({
    // lets you reaad from data in req.body
    extended: true,
  }),
);

app.use("/static", express.static("public"));

app.use("/movies", movies);

app.get("/", (req, res) => {
  res.json("test");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
