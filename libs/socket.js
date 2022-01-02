const { addMessage } = require('../use-cases/index')

module.exports = function connectSocket({ httpServer, Server }){
    const io = new Server(httpServer, {
        cors: {
            origin: ['http://localhost:3000']
        }
    })
    
    io.on("connection", socket =>{ 
        socket.on("message",  async ( message, user, room ) => {
           
            const chatMessage = {
                message,
                user,
                room
            }
            console.log(chatMessage)
            socket.to(room).emit(`received-message-socket:${room}`, chatMessage)
            addMessage({ username:chatMessage.user, message:chatMessage.message }) 
        })
        socket.on('join-room', room => {
            socket.leaveAll()
            socket.join(room)
            console.log(`joined room: ${room}`)
        })
    })
}

