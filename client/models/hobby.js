const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hobbySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  cost: { type: Integer, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  date: new Date(Date.now())
});

const Hobby = mongoose.model("Hobby", hobbySchema);

module.exports = Hobby;
