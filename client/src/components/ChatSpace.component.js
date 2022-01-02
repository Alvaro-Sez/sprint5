import React, { useRef, useState, useEffect } from 'react';
import {
    Chat,
    WriteMessageSpace,
    ChattingSpace,
    Message
} from './styled.components'
import { buildHandleSendMessage } from '../handlers';

export default function ChatSpace(props) {
    const {roomId, selected, userSelected, socket, randomColor, randomColor2} = props
    const [messages, setMessages] = useState([])
    
    let messageInput = useRef();
    
    const handleSendMessage = buildHandleSendMessage({socket, userSelected, messageInput, roomId})     
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            handleSendMessage()
        }
    }

    useEffect(()=>{
        socket.on(`received-message-socket:${roomId}`, chatMessage =>{
                setMessages(m => [...m, chatMessage ])
        })
        
        return ()=>{
            socket.removeAllListeners(`received-message-socket:${roomId}`);
        }
        
    },[roomId, socket])

    return (
        <Chat active={roomId===selected}>
            <ChattingSpace>
            {messages.map( (message, index)=> 
                    <Message style={message.user===userSelected?{}:{alignSelf:'start', backgroundColor:'white'}} key={index}>
                        <span style={message.user===userSelected?{color:`${randomColor}`, alignSelf:'end'}:{color:`${randomColor2}`}}> {message.user} </span>
                        <p > {message.message} </p>
                    </Message>)}
            </ChattingSpace>
            <WriteMessageSpace>
                <input onKeyDown={handleKeyDown} ref={messageInput}></input>
                <button onClick={handleSendMessage}>Send</button>
            </WriteMessageSpace>
        </Chat>
    )
}