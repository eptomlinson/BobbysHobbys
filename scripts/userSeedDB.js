const mongoose = require("mongoose");
const db = require("../models/index")

// need to change the data so it fits our hobbies (see the first one in hobbyseed)

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hobbies"
);

const userSeed = [
  {
    first_name: "Ethan",
    last_name: "Ellison",
    email: "e@e.com",
    password: "excellent",
  },
  {
    first_name: "Test",
    last_name: "Test",
    email: "test@test.com",
    password: "testing123",
  },
];

db.Hobby
  .remove({})
  .then(() => db.Hobby.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
