const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  surname: {
    type: String,
    required: false,
    min: 3,
    max: 255,
  },
  country: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  region: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  shipping_Address: {
    type: String,
    required: false,
    min: 6,
    max: 1024,
  },
  phone: {
    type: String,
    required: false,
    min: 6,
    max: 255,
  },
  verfied: {
    type: Boolean,
    required: true,
  },
  verification_code: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
