const express = require('express')
const router = express.Router()

const Hotel = require('../models/hotel')

//get a list of all hotels
router.get('/hotels', (req,res,next) => {
  Hotel.find({}).then( (hotel) => {
    res.send(hotel)
  })
})

//add new hotel
router.post('/hotels', (req,res,next) => {
  Hotel.create(req.body).then( (hotel) => {
    res.send(hotel)
  }).catch(next)
})

//update hotel
router.put('/hotels/:id', (req,res,next) => {
  Hotel.findByIdAndUpdate({_id: req.params.id}, req.body).then( () => {
    Hotel.findOne({_id:req.params.id}).then( (hotel) => {
      res.send(hotel)
    })
  })
})

//delete hotel
router.delete('/hotels/:id', (req,res,next) => {
  Hotel.findByIdAndRemove({
    _id: req.params.id
  }).then ( (hotel) => {
    res.send(hotel)
  })
})

module.exports = router
