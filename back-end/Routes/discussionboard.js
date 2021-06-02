"use strict";

// Setup
const ROUTER = require("express").Router();
const DISCUSSION_BOARD = require("../Models/discussionboard");

// Get Requests (200 is default HTTP status code)
ROUTER.get("/discussions/getAll", async(req, res) => {
    try {
        const POSTS = await DISCUSSION_BOARD.find();
        res.send(POSTS);
    } catch(err) {
        console.log(err.message);
    }
});

// Post Requests
ROUTER.post("/discussions/post", async(req, res) => {
    const POST = new DISCUSSION_BOARD(req.body); // New document using model
    try {
        const CREATED = await POST.save();
        res.status(201).send(CREATED);
    } catch(err) {
        console.log(err.message);
    }
});

// Export
module.exports = ROUTER;