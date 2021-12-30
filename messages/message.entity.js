module.exports = function buildMessageMaker({sanitizer}) {
    return function messageMaker({
        username,
        message
    }) {
        if(!username){
            throw new Error("every message should have a username")
        }
        if(!message){
            throw new Error("there is no message")
        }
        const sanitizedMessage = sanitizer(message).trim()

        if(sanitizedMessage.length < 1){
            throw new Error("this message contains no usable text")
        }

        return {
            username,
            message:sanitizedMessage
        }
    }
}

