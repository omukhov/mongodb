import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  plot: {
    type: String,
    required: true,
  },
  genres: [String],
  runtime: Number,
  cast: [String],
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
  fullplot: String,
  languages: [String],
  released: { type: Date, default: Date.now, required: true },
  directors: [String],
  writers: [String],
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: String,
  year: {
    type: Number,
    min: 1800,
    max: new Date().getFullYear(),
  },
  imdb: {
    rating: {
      type: Number,
      min: 0,
      max: 10,
    },
    votes: Number,
    id: Number,
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: {
      rating: {
        type: Number,
        min: 0,
        max: 100,
      },
      numReviews: Number,
      meter: Number,
    },
    production: String,
    lastUpdated: { type: Date, default: Date.now },
  },
  num_mflix_comments: Number,
});

movieSchema.index({ title: 1 });
movieSchema.index({ year: 1 });
movieSchema.index({ genres: 1 });
movieSchema.index({ "imdb.rating": -1 });

export default mongoose.model("Movie", movieSchema, "movies");
