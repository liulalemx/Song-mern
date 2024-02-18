import { z } from "zod";

export const songSchema = z.object({
	title: z.string().min(1, "Name is required"),
	artist: z.string().min(1, "Artist is required"),
	album: z.string().min(1, "Album is required"),
	genre: z.string().min(1, "Genre is required"),
	publishYear: z
		.number()
		.int()
		.positive("Publish year mush be a positive integer"),
});
