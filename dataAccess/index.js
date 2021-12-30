const buildMessageRepository = require('./message.repository')
const messageModel = require('./models/messages.model')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/chatMessages', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err))

const messageRepository = buildMessageRepository({messageModel})

module.exports = messageRepository
