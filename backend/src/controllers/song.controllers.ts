import { Response, Request } from "express";
import { SongModel } from "../models/songModel";
import { songSchema } from "../schemas/songSchema";

// @desc   create song
// @route  POST /songs
// @access Private
const createSong = async (req: Request, res: Response) => {
	try {
		// Validate input
		const response = songSchema.safeParse(req.body);
		if (!response.success) {
			return res.status(400).send({
				message: response.error.issues,
			});
		}

		// Create Song
		const newSong = {
			title: req.body.title,
			artist: req.body.artist,
			album: req.body.album,
			genre: req.body.genre,
			publishYear: req.body.publishYear,
		};

		const song = await SongModel.create(newSong);
		return res.status(201).send(song);
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

// @desc   get all songs
// @route  GET /songs
// @access Private
const getAllSongs = async (req: Request, res: Response) => {
	try {
		const songs = await SongModel.find({ deleted: false });
		return res.status(200).json({
			count: songs.length,
			data: songs,
		});
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

// @desc   get song by id
// @route  GET /songs/:id
// @access Private
const getSong = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const song = await SongModel.findById(id);
		return res.status(200).json(song);
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

// @desc   update song by id
// @route  PUT /songs/:id
// @access Private
const updateSong = async (req: Request, res: Response) => {
	try {
		// Validate input
		const response = songSchema.safeParse(req.body);
		if (!response.success) {
			return res.status(400).send({
				message: response.error.issues,
			});
		}

		// Update database
		const { id } = req.params;
		const result = await SongModel.findByIdAndUpdate(id, req.body, {
			new: true,
		});

		if (!result) return res.status(404).json({ message: "Song not found!" });

		return res
			.status(200)
			.json({ message: "Song updated successfully!", data: result });
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

// @desc   delete song by id - UNSAFE
// @route  DELETE /songs/:id
// @access Private
const deleteSongUnsafe = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const result = await SongModel.findByIdAndDelete(id);

		if (!result) {
			return res.status(404).json({ message: "Song not found" });
		}

		return res
			.status(200)
			.send({ message: "Song deleted successfully", data: result });
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

// @desc   delete song by id - SAFE
// @route  DELETE /songs/:id
// @access Private
const deleteSongSafe = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const result = await SongModel.findByIdAndUpdate(id, { deleted: true });

		if (!result) {
			return res.status(404).json({ message: "Song not found" });
		}

		return res
			.status(200)
			.send({ message: "Song deleted successfully", data: result });
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

export {
	createSong,
	getAllSongs,
	getSong,
	updateSong,
	deleteSongUnsafe,
	deleteSongSafe,
};
