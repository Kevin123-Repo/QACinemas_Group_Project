"use strict";

// Setup
const ROUTER = require("express").Router();
const DISCUSSION_BOARD = require("../Models/discussionboard");

// Get Requests (200 is default HTTP status code)
ROUTER.get("/discussions/getAll", async(req, res, next) => {
    try {
        const POSTS = await DISCUSSION_BOARD.find();
        (POSTS.length)? res.send(POSTS) : next(new Error("ERROR: There are no posts to retrieve"));
    } catch(err) {
        next(new Error(err.message));
    }
});

// Post Requests
ROUTER.post("/discussions/post", async(req, res, next) => {
    const POST = new DISCUSSION_BOARD(req.body); // New document using model
    try {
        const CREATED = await POST.save();
        res.status(201).send(CREATED);
    } catch(err) {
        next(new Error(err.message));
    }
});

// Export
module.exports = ROUTER;