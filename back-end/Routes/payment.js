"use strict";

// Setup
const ROUTER = require("express").Router();
const STRIPE = require("stripe")("sk_test_51IyD7qIkKzhuH6slejJKhVPVa2V6IDLzETDFUsJeIjpXxE3aS0UC3tH60PIJZecdAEfihJlGy6K3CeIKFVqeraLo00CsHxOjQQ");
const BOOKING = require("../Models/booking");

// Post Requests
ROUTER.post("/payment", async(req, res, next) => {
    try {
        const charge = await STRIPE.charges.create(
        {
            amount: req.body.price,
            source: req.body.token.id,
            currency: 'USD',
            description: `Booking for ${req.body.booking.movieTitle} tickets - ${req.body.booking.name}`
        });
        const DOC = new BOOKING(req.body.booking); // New document using model
        const CREATED = await DOC.save();
        res.status(201).send(CREATED);
    } catch(err) {
        next(new Error(err.message));
    }
});

// Export
module.exports = ROUTER;