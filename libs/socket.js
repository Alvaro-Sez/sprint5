const addMessage = require('../use-cases/index')

module.exports = function connectSocket({ httpServer, Server }){
    const io = new Server(httpServer, {
        cors: {
            origin: ['http://localhost:3000']
        }
    })
    
    io.on("connection", socket =>{ 
        socket.on("message", async ( message, user ) => {
            io.emit('received-message', message)
           /*  return addMessage({ username:user, message }) */
        })
    })
}

