const mongoose = require('mongoose');
const Schema = mongoose.Schema

const messageSchema = new Schema({
    username : { type: String, required: true },
    message : { type: String, required: true }
})

const Messages = mongoose.model('messages', messageSchema)

module.exports = Messages
