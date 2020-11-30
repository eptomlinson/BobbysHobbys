// Dependencies
const express = require('express');
const routes = require("./routes");
const path = require("path");
const session = require('express-session');
const passport = require('./passport/index');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Variable Port
const PORT = process.env.PORT || 3001;

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/Passport',
	{
	  useNewUrlParser: true,
	  useUnifiedTopology: true,
	  useCreateIndex: true,
	  useFindAndModify: false
	}
)

app.use(session({
  secret: "key",
  resave: false,
  saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use("/api/users", userRoutes);





// If our node environment is production we will serve up our static assets from the build folder
if (process.env.NODE_ENV === 'production') {
    // The react app is called 'client' and we are accessing the build folder that is initialized in the postbuild scripts.
    app.use(express.static('client/build'))
};

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// Start the server
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });