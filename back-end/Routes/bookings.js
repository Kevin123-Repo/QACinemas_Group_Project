"use strict";

// Setup
const ROUTER = require("express").Router();
const STRIPE = require("stripe")("sk_test_51IyD7qIkKzhuH6slejJKhVPVa2V6IDLzETDFUsJeIjpXxE3aS0UC3tH60PIJZecdAEfihJlGy6K3CeIKFVqeraLo00CsHxOjQQ");
const BOOKING = require("../Models/booking");

// For extracting desired card properties from payment_method_details
const extractVals = ({brand, country, exp_month, exp_year, funding, last4}) => {
    return {brand, country, exp_month, exp_year, funding, last4};
}
// Post Requests
ROUTER.post("/bookings/payment", async(req, res, next) => {
    try {
        const charge = await STRIPE.charges.create(
        {
            amount: req.body.price * 100,
            source: req.body.token.id,
            currency: 'USD',
            description: `Booking for ${req.body.booking.movieTitle} tickets - ${req.body.booking.name}`
        });

        let payInfoObj = {
            amount: charge.amount/100,
            paid: charge.paid,
            payment_method_details: {
                card: extractVals(charge.payment_method_details.card),
                type: charge.payment_method_details.type
            },
            receipt_url: charge.receipt_url
        };

        let bookingObj = req.body.booking;
        bookingObj.paymentInfo = payInfoObj;  // Add payment info to booking object
        const DOC = new BOOKING(bookingObj); // New document using model
        const CREATED = await DOC.save();
        res.status(201).send(CREATED);
    } catch(err) {
        next(new Error(err.message));
    }
});

// Export
module.exports = ROUTER;