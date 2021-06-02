"use strict";

// Setup
const ROUTER = require("express").Router();
const PAYMENT = require("../Models/payment");

// Post Requests
ROUTER.post("/payment/post", async(req, res, next) => {
    const DOC = new PAYMENT(req.body); // New document using model
    try {
        const CREATED = await DOC.save();
        res.status(201).send(CREATED);
    } catch(err) {
        next(new Error(err.message));
    }
});

// Export
module.exports = ROUTER;