"use strict";

// Setup
const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
const CORS = require("cors");
const MOVIE_ROUTES = require("./Routes/movies");
const DISCUSSION_BOARD_ROUTES = require("./Routes/discussionboard");
const BOOKING_ROUTES = require("./Routes/bookings");
const APP = EXPRESS();

// Middleware & Routes
APP.use(CORS());                       // Disable Cross Origin Resource Sharing Restrictions
APP.use(EXPRESS.json());              // JSON Body Parser
APP.use(MOVIE_ROUTES);               //
APP.use(BOOKING_ROUTES);            // Routes for different collections
APP.use(DISCUSSION_BOARD_ROUTES);  //

// Connect to MongoDB
MONGOOSE
.connect("mongodb+srv://qacinemas:XTorP2q49ji5@qacinema1.gn9gk.mongodb.net/qacinemas?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connection Succesful");
}).catch((err) => { 
    console.log("MongoDB Connection Failed!!!");
});

const PORT = process.env.PORT || 8080;
// Listen for traffic on PORT
APP.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`App listening at http://localhost:${PORT}`);
    }
});

// module.exports = server;
