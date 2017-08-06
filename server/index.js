import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

//body parser middleware
app.use(bodyParser.json());

// Import API Routes middleware
app.use('/api', api)

//error handling in post req
app.use( (err,req,res,next) => {
  res.status(422).send({error: err.message});
});

//connect to mongodb
mongoose.connect('mongodb://localhost/syros');
mongoose.promise = global.Promise;

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
