const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  fatherName: String,
  email: { type: String, unique: true },
  password: String,  // Store password as plain text (not hashed)
});

module.exports = mongoose.model("User", userSchema);
