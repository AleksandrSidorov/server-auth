const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./router')

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth')

// Express Setup
const app = express()

app.use( bodyParser.json({ type: '*/*' }) )
app.use( morgan('combined') )

router(app)

// Run Server
const server = app.listen(8090, function() {
  const host = server.address().address
  const port = server.address().port
  console.log(`Express Server is running on host ${host}:${port}.`);
})
