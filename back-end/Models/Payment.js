"use strict";

// Setup
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

// Create Schemas
const PAYMENT_SCHEMA = new SCHEMA({
    name: {
		type: String,
		required: [true, "Cardholder's name must be included"]
	},
	cardNumber: {
		type: Number,
		min: [16, "Card number must be 16 digits"],
		max: [16, "Card number must be 16 digits"]
	},
	expiryDate: {
		type: string,
		required: [true, "Expiry date is required"]
	},
	cvc: {
		type: Number,
		min: [3, "cvc must be 3 digit number"],
		max: [3, "cvc must be 3 digit number"]
	}
});

module.exports = MONGOOSE.model("Payment", PAYMENT_SCHEMA);
