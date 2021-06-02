"use strict";

// Setup
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

// Create Schemas
const BOOKING_SCHEMA = new SCHEMA({
    movieTitle: {
		type: String,
		required: [true, "Movie title is required"],
	},
	date: {
		type: Date,
		required: [true, "Date is required for booking"]
	},
	time: {
		type: String,
		required: [true, "Time is required for booking"]
	},
	name: {
		type: String, 
		required: [true, "Name is required for booking"]
	},
	numberOfSeats: {
		type: Number,
		required: [true, "Number of seats are required for booking"],
		min: [1, "Must choose at least 1 seat"],
		max: [300, "You can't book more than 300 seats"]
	},
	adults: Number, 
	child: Number,
	concession: Number
});

module.exports = MONGOOSE.model("Booking", BOOKING_SCHEMA);
