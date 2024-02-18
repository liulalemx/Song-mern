import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import homeRoute from "./routes/home.routes";
import songsRoute from "./routes/song.routes";
import statsRoute from "./routes/stats.routes";

// .env file
dotenv.config();

const port = process.env.PORT || 5000;

const app: Application = express();

// Middleware: JSON body request
app.use(express.json());

// Middleware for CORS policy
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type"],
	}),
);

// Routes
app.use("/v1", homeRoute);
app.use("/v1/songs", songsRoute);
app.use("/v1/stats", statsRoute);

// Db and Server setup
mongoose
	.connect(process.env.MONGO_DB_URL!)
	.then(() => {
		console.log("App connected to Database");
		app.listen(port, () => {
			console.log(`App is listening to port: ${port}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
