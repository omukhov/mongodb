import express from "express";
import { getTenComments } from "../controllers/comments.js";

const router = express.Router();

router.get("/", getTenComments);

export default router;
