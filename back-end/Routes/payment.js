"use strict";

// Setup
const ROUTER = require("express").Router();
const STRIPE = require("stripe")("sk_test_51IyD7qIkKzhuH6slejJKhVPVa2V6IDLzETDFUsJeIjpXxE3aS0UC3tH60PIJZecdAEfihJlGy6K3CeIKFVqeraLo00CsHxOjQQ");
const PRICE = 1000;
// Post Requests
ROUTER.post("/payment", async(req, res, next) => {
    try {
        console.log(req.body);
        const charge = await STRIPE.charges.create(
        {
            amount: 1000,
            source: req.body.id,
            currency: 'USD',
            description: "AL Test Charge"
    
        });
        res.status(201).send(charge);
    } catch(err) {
        next(new Error(err.message));
    }
});

// Export
module.exports = ROUTER;