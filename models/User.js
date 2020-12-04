const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Hobby } = require('.');
const Schema = mongoose.Schema;
// define the User model schema
const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        index: { unique: true },
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },

    favoriteHobbies: [{type: Schema.Types.ObjectId, ref: "hobbies"}]

});
UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};
// Define hooks for pre-saving
UserSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");
    this.password = this.hashPassword(this.password);
    console.log("creating hashed password");
    console.log(this.password) // $2b$10$6xeAQVS1xKouK9cpKg8Fz.2A2Z16v8DdXK0KCA1lItikIRF/cmQRe
    next();
  }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;