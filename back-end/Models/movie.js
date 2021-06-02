"use strict";

// Setup
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

// Create Schemas
const SHOWING_TIMES_SCHEMA = new SCHEMA({
    day: {
		type: String,
		enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		message: "{VALUE} is not supported."
	},
	times: [String]
});

const MOVIE_SCHEMA = new SCHEMA({
    title: {
		type: String,
		required: [true, "You must include a title"]
	},
	actors: [String],
	director: [String],
	imageUrl: String,
	classification: {
		type: String,
		enum: ["U", "PG", "12", "12A", "15", "18"],
		message: "{VALUE} is not supported."
	},
	releaseDate: {
		type: Date,
		required: [true, "Movie must have a release date"]
	},
	showingTimes: [SHOWING_TIMES_SCHEMA]
});

module.exports = MONGOOSE.model("Movie", MOVIE_SCHEMA);
