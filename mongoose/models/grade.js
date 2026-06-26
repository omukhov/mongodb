import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    type: String,
    score: Number,
  },
  { _id: false },
);

const gradeSchema = new mongoose.Schema({
  student_id: Number,
  scores: [scoreSchema],
  class_id: Number,
  learner_id: Number,
});

export default mongoose.model("grade", gradeSchema, "grades");
