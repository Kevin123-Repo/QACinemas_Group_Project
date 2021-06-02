"use strict";

// Setup
const ROUTER = require("express").Router();
const MOVIE = require("../Models/movie");

// Get Requests (200 is default HTTP status code)
ROUTER.get("/movies/getAll", async(req, res, next) => {
    try {
        const MOVIES = await MOVIE.find();
        (MOVIES.length)? res.send(MOVIES) : next(new Error("ERROR: There are no movies to retrieve"));
    } catch(err) {
        next(new Error(err.message));
    }
});

// Export
module.exports = ROUTER;