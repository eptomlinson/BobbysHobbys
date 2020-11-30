// Dependencies
const express = require('express');
var cors = require('cors')
const routes = require("./routes");
const mongoose = require("mongoose");

// Express instance
const app = express();

// Variable Port
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// If our node environment is production we will serve up our static assets from the build folder
if (process.env.NODE_ENV === 'production') {
    // The react app is called 'client' and we are accessing the build folder that is initialized in the postbuild scripts.
    app.use(express.static('client/build'))
};


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hobbies");
// API and View Routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server listening at http://localhost:${PORT}`)
    };
});