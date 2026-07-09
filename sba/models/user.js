import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

usersSchema.index({ name: 1 });
usersSchema.index({ email: 1 });

export default mongoose.model("User", usersSchema, "users");
