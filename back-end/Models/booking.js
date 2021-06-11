"use strict";

// Setup
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

// Create Schemas

const CARD_SCHEMA = new SCHEMA({
	brand: {
		type: String,
		enum: ["visa", "amex", "jcb", "mastercard", "unionpay", "discover", "diners_club", "cartes_bancaires"],
		message: "{VALUE} is not supported."
	},
	country: String,
	exp_month: {
		type: Number, 
		min: [1, "Month must be between 1 and 12"],
		max: [12, "Month must be between 1 and 12"]
	},
	exp_year: {
		type: Number,
		min: [2021, "Exp year must be at least 2021"],
		max: [2031, "Exp year must be before 2032"]
	},
	funding: String,
	last4: {
		type: String,
		required: [true, "Last 4 digits are required"]
	}
});

const PAYMENT_METHOD_SCHEMA = new SCHEMA({
	card: CARD_SCHEMA,
	type: {
		type: String,
		required: [true, "Type is required"]
	}
});

const PAYMENT_INFO_SCHEMA = new SCHEMA({
	amount: {
		type: Number,
		required: [true, "Payment amount is required"]
	},
	paid: {
		type: Boolean,
		required: [true, "Paid is either truth or false"]
	},
	payment_method_details: PAYMENT_METHOD_SCHEMA,
	receipt_url: String
});

const BILLING_DETAILS_SCHEMA = new SCHEMA({
	name: String,
	address_line1: String, 
	address_line2: String,
	address_city: String,
	address_country: String,
	address_zip: String,
	email: String
});

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
	concession: Number,
	billing_details: BILLING_DETAILS_SCHEMA,
	paymentInfo: PAYMENT_INFO_SCHEMA
});

module.exports = MONGOOSE.model("Booking", BOOKING_SCHEMA);
