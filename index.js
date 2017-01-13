// Main starting point of the server application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan') // loging
const router = require('./router')

const app = express()

// App Setup
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)


// Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)
