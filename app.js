const express = require('express')
const { createServer } = require('http')
const app = express()
const httpServer = createServer(app)
const { Server } = require('socket.io')
require('./libs/socket')({ httpServer, Server })
const messageController = require('./controllers/index');
const makeExpressCallback = require('./expressCallback/index');
const {
    postMessage,
    getMessages
} = messageController

app.use(express.json())
app.get('/messages', makeExpressCallback(getMessages))
app.post('/messages', makeExpressCallback(postMessage))

module.exports = httpServer