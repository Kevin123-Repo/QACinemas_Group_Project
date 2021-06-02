"use strict";

// Setup
const ROUTER = require("express").Router();
const MOVIE = require("../Models/movie");

// Get Requests (200 is default HTTP status code)
ROUTER.get("/movies/getAll", async(req, res) => {
    try {
        const MOVIES = await MOVIE.find();
        res.send(MOVIES);
    } catch(err) {
        console.log(err.message);
    }
});

// Export
module.exports = ROUTER;