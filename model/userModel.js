const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: {
    type: string,
  },
  password: {
    type: string,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: string,
  },
});

module.exports = mongoose.model("user", userSchema);
