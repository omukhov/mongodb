import express from "express";
import { getAllComments } from "../controllers/comments.js";

const router = express.Router();

router.get("/", getAllComments);

export default router;
