const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const usersSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  password: String
},{timestamps: true})

usersSchema.pre('save', async function (next) { //sebelum data disave lakukan fungsi tersebut, baru lanjutkan. tidak bisa dengan arrow function
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);
  next();
});

const User = mongoose.model("User",usersSchema);

module.exports = User;