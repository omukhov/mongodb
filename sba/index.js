import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.js";
import movies from "./routes/movies.js";
import comments from "./routes/comments.js";
import users from "./routes/users.js";

// Dotenv config
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Register express built in json
app.use(express.json());

// Lets you reaad from data in req.body
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use("/static", express.static("public"));

// Routes
app.use("/movies", movies);
app.use("/comments", comments);
app.use("/users", users);

// Main
app.get("/", (req, res) => {
  res.json("main");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
