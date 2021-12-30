const messageRepository = require('../dataAccess/index');
const buildListMessages = require('./listMessages.usecase');
const buildAddMessage = require('./addMessage.usecase');

const addMessage = buildAddMessage({messageRepository})
const listMessages = buildListMessages({messageRepository})

const messageService = Object.freeze({
    addMessage,
    listMessages
})

module.exports = messageService