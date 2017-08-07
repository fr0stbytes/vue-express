const express = require('express')
const router = express.Router()

const User = require('../models/user')

// Mock Users
// const users = [
  // { name: 'Alexandre' },
  // { name: 'Pooya' },
  // { name: 'Sébastien' },
// ]

//add new user
router.post('/users', (req,res,next) => {
  User.create(req.body).then( (user) => {
    res.send(user)
  }).catch(next)
})

/* GET users listing. */
router.get('/users', function (req, res, next) {
  User.find({}).then( (user) => {
    res.json(user)
  })
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
