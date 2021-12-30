module.exports = function buildListMessages({messageRepository}) {
    return async function listMessages(user) {
        const messages = await messageRepository.findMessagesByUser(user)

        if(!messages.length) throw new Error('there are no messages from this user')

        return messages
    }
}