const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create hotel schema and model
const UserSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  password2: {
    type: String,
    required: [true, 'Passwords have to match']
  },
})

const User = mongoose.model('user', UserSchema)

module.exports = User
