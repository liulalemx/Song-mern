import express from "express";
import {
	getGeneralStats,
	getAlbumStats,
	getArtistStats,
	getGenresStats,
} from "../controllers/stats.controllers";

const router = express.Router();

// Get General Stats
router.get("/", getGeneralStats);

// Get Album Stats
router.get("/albums", getAlbumStats);

// Get Artist Stats
router.get("/artists", getArtistStats);

// Get Genre Stats
router.get("/genres", getGenresStats);

export default router;
