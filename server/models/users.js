const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  password: String
},{timestamps: true})

const User = mongoose.model("User",usersSchema);

module.exports = User;