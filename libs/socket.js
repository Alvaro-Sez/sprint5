module.exports = function connectSocket({ httpServer, Server }){
    const io = new Server(httpServer, {
        cors: {
            origin: ['http://localhost:3000']
        }
    })
    
    io.on("connection", socket =>{ 
        socket.on("message", message => {
            io.emit('received-message', message)
        })
    })
}

