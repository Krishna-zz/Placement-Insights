const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String }, // only for manual login
  googleId: { type: String }, // only for Google login
  avatar: String,
})


const User = mongoose.model('User', UserSchema)

module.exports = User