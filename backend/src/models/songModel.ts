import mongoose from "mongoose";

interface Song {
	title: string;
	artist: string;
	album: string;
	genre: string;
	publishYear: number;
	deleted: boolean;
}

const songSchema = new mongoose.Schema<Song>(
	{
		title: {
			type: String,
			required: true,
		},
		artist: {
			type: String,
			required: true,
		},
		album: {
			type: String,
			required: true,
		},
		genre: {
			type: String,
			required: true,
		},
		publishYear: {
			type: Number,
			required: true,
		},
		deleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

export const SongModel = mongoose.model<Song>("Song", songSchema);
