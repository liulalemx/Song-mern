import express from "express";
import {
	createSong,
	getAllSongs,
	getSong,
	updateSong,
	deleteSongSafe,
} from "../controllers/song.controllers";

const router = express.Router();

// Create Song
router.post("/", createSong);

// Get All Songs
router.get("/", getAllSongs);

// Get Song By ID
router.get("/:id", getSong);

// Update Song By ID
router.put("/:id", updateSong);

// Delete Song By ID
router.delete("/:id", deleteSongSafe);

export default router;
