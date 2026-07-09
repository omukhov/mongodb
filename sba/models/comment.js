import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

commentSchema.index({ name: 1 });
commentSchema.index({ email: 1 });
commentSchema.index({
  movie_id: 1,
  date: -1,
});

export default mongoose.model("Comment", commentSchema, "comments");
