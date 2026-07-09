import express from "express";
import { getTenUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/", getTenUsers);

export default router;
