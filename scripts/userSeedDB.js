const mongoose = require("mongoose");
const db = require("../models/index")

// need to change the data so it fits our hobbies (see the first one in hobbyseed)

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hobbies"
);

const userSeed = [
  {
    first_name: "Sandra",
    last_name: "Smith",
    email: "blah@gmail.com",
    password: "This is an art where only a pen and paper are needed.",
  },
  {
    first_name: "Test",
    last_name: "Test",
    email: "Test",
    password: "abcds",
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
