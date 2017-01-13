const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./router')

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth')

// Express Setup
const app = express()

app.use( morgan('combined') )
app.use(cors())
app.use( bodyParser.json({ type: '*/*' }) )

router(app)

// Run Server
const server = app.listen(8090, function() {
  const host = server.address().address
  const port = server.address().port
  console.log(`Express Server is running on host ${host}:${port}.`);
})
