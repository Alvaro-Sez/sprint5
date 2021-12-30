const buildGetMessages = require('./getMessages.controllet');
const buildPostMessage = require('./postMessage.controller');
const messageService = require('../use-cases/index');

const {
    addMessage,
    listMessages
} = messageService

const postMessage = buildPostMessage({addMessage});
const getMessages = buildGetMessages({listMessages});

const messageController = Object.freeze({
    postMessage,
    getMessages
})

module.exports = messageController