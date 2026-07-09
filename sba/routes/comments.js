import express from "express";
import { getTenComments } from "../controllers/comments.js";

const router = express.Router();

// Invoke function get 10 comments from controller
router.get("/", getTenComments);

export default router;
