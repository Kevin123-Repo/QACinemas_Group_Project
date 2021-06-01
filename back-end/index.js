"use strict";

// Setup
const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
const CORS = require("cors");
const APP = EXPRESS();
const PORT = 3000;

// Middleware & Routes
APP.use(CORS());                       // Disable Cross Origin Resource Sharing Restrictions
APP.use(EXPRESS.json());              // JSON Body Parser

// Connect to MongoDB
MONGOOSE
    .connect("URL_HERE", {
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
