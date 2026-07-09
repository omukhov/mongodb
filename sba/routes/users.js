import express from "express";
import { getTenUsers } from "../controllers/users.js";

const router = express.Router();

// Invoke function get 10 users from controller
router.get("/", getTenUsers);

export default router;
