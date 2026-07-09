import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  title: String,
  fullplot: String,
  languages: [String],
  released: { type: Date, default: new Date() },
  directors: [String],
  writers: [String],
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: String,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    production: String,
    lastUpdated: { type: Date, default: new Date() },
  },
  num_mflix_comments: Number,
});

export default mongoose.model("Movie", movieSchema, "movies");
