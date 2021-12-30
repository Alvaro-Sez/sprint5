import React, {useState} from 'react';

import { io } from 'socket.io-client'

const socket = io('http://localhost:8080')

function App() {
  const [messages, setMessages] = useState([])
  const emitMessage = () =>{
    const message = "im being pressed";
    socket.emit('message', message)
  }

  const pushMessage = (message) => {
    setMessages([...messages, message])
  }

  socket.on('received-message', messageReceived => pushMessage(messageReceived))

  return (
    <div>

     <p>hello</p>
     <button onClick={emitMessage}>pressme!</button>
     <ul>
       { messages[0] && messages.map((message, index) => <li key={index}> {message} </li>)}
     </ul>
    </div>
  );
}

export default App;
