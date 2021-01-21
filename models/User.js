const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    requires: true
  },
  username: {
    type: String,
    requires: true
  },
  email: {
    type: String,
    requires: true
  },
  password: {
    type: String,
    requires: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users', UserSchema)