import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.js";
import movies from "./routes/movies.js";
import comments from "./routes/comments.js";
import users from "./routes/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //register express built in json

app.use(
  express.urlencoded({
    // lets you reaad from data in req.body
    extended: true,
  }),
);

app.use("/static", express.static("public"));

app.use("/movies", movies);
app.use("/comments", comments);
app.use("/users", users);

app.get("/", (req, res) => {
  res.json("main");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
