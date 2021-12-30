const makeMessage = require('../messages/index')

module.exports = function buildAddMessage({messageRepository}){
    return async function addMessage(messageInfo){
        const message = makeMessage(messageInfo)
        return await messageRepository.addMessage(message)
    }
}