import express from "express";
import { getWelcomeMessage } from "../controllers/home.controllers";

const router = express.Router();

// Default Route
router.get("/", getWelcomeMessage);

export default router;
