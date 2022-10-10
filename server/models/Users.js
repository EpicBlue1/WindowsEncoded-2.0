const mongoose = require("mongoose");
const jwt = require("jsonWebtoken");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  accStatus: {
    type: Boolean,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
  },

  token: {
    type: String,
  },
});

// encrypt password before saving
UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;

    let tokePayload = { username: this.username, email: this.email };
    const token = await jwt.sign(tokePayload, process.env.ACCESS_TOKEN_SECRET);
    this.token = token;

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Users", UserSchema);
