"use strict";

// Setup
const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
const CORS = require("cors");
const MOVIE_ROUTES = require("./Routes/movies");
const DISCUSSION_BOARD_ROUTES = require("./Routes/discussionboard");
const BOOKING_ROUTES = require("./Routes/bookings");
const PAYMENT_ROUTES = require("./Routes/payment");
const APP = EXPRESS();
const PORT = 8080;

// Middleware & Routes
APP.use(CORS());                       // Disable Cross Origin Resource Sharing Restrictions
APP.use(EXPRESS.json());              // JSON Body Parser
APP.use(MOVIE_ROUTES);               //
APP.use(BOOKING_ROUTES);            // Routes for different collections
APP.use(PAYMENT_ROUTES);           //
APP.use(DISCUSSION_BOARD_ROUTES); //

// Connect to MongoDB
MONGOOSE
    .connect("mongodb://localhost:27017/qacinemas", {
        useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
    }).then(() => {
        console.log("MongoDB Connection Succesful");
        // Listen for traffic on PORT
        APP.listen(PORT, (err) => {
            if (err) console.log(err);
            console.log(`App listening at http://localhost:${PORT}`);
        });
    }).catch((err) => { 
        console.log("MongoDB Connection Failed!!!");
    });
