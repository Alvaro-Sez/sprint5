module.exports = function buildMessageRepository({messageModel}) {
    return Object.freeze({
        addMessage,
        findMessagesByUser
    })

    async function addMessage(message){
        const newMessage = messageModel(message)
        return await newMessage.save()
    }

    async function findMessagesByUser(user){
        const messages = await messageModel.find({username : user})
        return messages
    }
}