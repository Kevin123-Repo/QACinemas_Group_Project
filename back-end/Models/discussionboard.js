"use strict";

// Setup
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

// Create Schemas
const DISCUSSION_BOARD_SCHEMA = new SCHEMA({
    username: String, // Default Anonymous?
	comment: {
		type: String,
		max: [280, "Comment must be less than 280 characters"]
	},
	rating: {
		type: Number, 
		min: [1, "Rating must be between 1-5"],
		max: [5, "Rating must be between 1-5"]
	},
	movieTitle: String
});

module.exports = MONGOOSE.model("DiscussionBoard", DISCUSSION_BOARD_SCHEMA);
