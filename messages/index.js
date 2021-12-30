const buildMessageMaker = require('./message.entity')
const sanitizer = require('sanitize-html');

const messageMaker = buildMessageMaker({sanitizer})

module.exports = messageMaker