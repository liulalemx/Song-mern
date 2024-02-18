import { Response, Request } from "express";
import { SongModel } from "../models/songModel";

// @desc   get general stats
// @route  GET /stats
// @access Private
const getGeneralStats = async (req: Request, res: Response) => {
	try {
		let match = { $match: { deleted: { $ne: true } } };

		const albums = await SongModel.aggregate([
			match,
			{ $group: { _id: "$album", songs: { $sum: 1 } } },
		]);
		const artists = await SongModel.aggregate([
			match,
			{
				$group: {
					_id: "$artist",
					songs: { $sum: 1 },
					albums: { $addToSet: "$album" },
				},
			},
			{ $project: { _id: 1, songs: 1, albums: { $size: "$albums" } } },
		]);
		const genres = await SongModel.aggregate([
			match,
			{ $group: { _id: "$genre", songs: { $sum: 1 } } },
		]);

		return res.status(200).json({
			albums: {
				amount: albums.length,
				data: albums,
			},
			artists: {
				amount: artists.length,
				data: artists,
			},
			genres: {
				amount: genres.length,
				data: genres,
			},
		});
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

// @desc   get album stats
// @route  GET /stats/albums
// @access Private
const getAlbumStats = async (req: Request, res: Response) => {
	try {
		const albums = await SongModel.aggregate([
			{ $group: { _id: "$album", songs: { $sum: 1 } } },
		]);

		return res.status(200).json({
			count: albums.length,
			data: albums,
		});
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

// @desc   get artist stats
// @route  GET /stats/artists
// @access Private
const getArtistStats = async (req: Request, res: Response) => {
	try {
		const artists = await SongModel.aggregate([
			{
				$group: {
					_id: "$artist",
					songs: { $sum: 1 },
					albums: { $addToSet: "$album" },
				},
			},
			{ $project: { _id: 1, songs: 1, albums: { $size: "$albums" } } },
		]);

		return res.status(200).json({
			count: artists.length,
			data: artists,
		});
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

// @desc   get genere stats
// @route  GET /stats/genres
// @access Private
const getGenresStats = async (req: Request, res: Response) => {
	try {
		const genres = await SongModel.aggregate([
			{ $group: { _id: "$genre", songs: { $sum: 1 } } },
		]);

		return res.status(200).json({
			count: genres.length,
			data: genres,
		});
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			res.status(500).send({ message: error.message });
		}
	}
};

export { getGeneralStats, getAlbumStats, getArtistStats, getGenresStats };
