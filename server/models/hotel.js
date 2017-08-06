const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create hotel schema and model
const HotelSchema = new Schema ({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  website: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  }
  // TODO Add geolocation
})

const Hotel = mongoose.model('hotel', HotelSchema)

module.exports = Hotel
