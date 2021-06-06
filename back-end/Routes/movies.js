"use strict";

// Setup
const ROUTER = require("express").Router();
const MOVIE = require("../Models/movie");

// Get Requests (200 is default HTTP status code)
ROUTER.get("/movies/getCurrent", async(req, res, next) => {
    try {
        const MOVIES = await MOVIE.find({releaseDate:{$lte: new Date()}});
        (MOVIES.length)? res.send(MOVIES) : next(new Error("ERROR: There are no movies to retrieve"));
    } catch(err) {
        next(new Error(err.message));
    }
});

ROUTER.get("/movies/getNewReleases", async(req, res, next) => {
    try {
        const MOVIES = await MOVIE.find({releaseDate:{$gt: new Date()}});
        (MOVIES.length)? res.send(MOVIES) : next(new Error("ERROR: There are no movies to retrieve"));
    } catch(err) {
        next(new Error(err.message));
    }
});

ROUTER.get("/movies/get/:title", async(req, res, next) => {
    try {
        const FOUND = await MOVIE.findOne({ title: req.params.title });
        (FOUND)? res.send(FOUND) : next(new Error("ERROR: Could not find a movie with that title"));
    } catch(err) {
        next(new Error(err.message));
    }
});

// Export
module.exports = ROUTER;