import express from "express";
import {
  createMovie,
  getTenMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} from "../controllers/movies.js";

const router = express.Router();

// Invoke function create movie from controller
router.post("/", createMovie);
// Invoke function get 10 movies from controller
router.get("/", getTenMovies);
// Invoke function get movie by id from controller
router.get("/:id", getMovieById);
// Invoke function update movie by id from controller
router.put("/:id", updateMovie);
// Invoke function delete movie by id from controller
router.delete("/:id", deleteMovie);

export default router;
