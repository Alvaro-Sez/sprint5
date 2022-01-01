import React, {useState} from 'react';
import { io } from 'socket.io-client'
import {
  Wrapper,
  GoogleWrapper,
  LogoutButton
} from './components/styled.components';
import RoomSpace from './components/RoomSpace.component';
import ChatSpace from './components/ChatSpace.component';
import AdditionalFeatures from './components/AdditionalFeatures.component';
import GoogleLogin from 'react-google-login';
import {
  buildHandleFailure,
  buildHandleLogin,
  buildHandleLogout
} from './handlers/index'

const google_uri = process.env.REACT_APP_GOOGLE_URI

/* const endPoint = 'http://localhost:8080';

const socket = io(endPoint) */

function App() {
  const [username, setUsername] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData')).yu.qf
      : null
    )
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
    )
  const [rooms, setRooms] = useState([1,2,3])
  const [roomSelected, setRoomSelected] = useState(1) 

  const handleFailure = buildHandleFailure()
  const handleLogin = buildHandleLogin({setUsername, setLoginData})
  const handleLogout = buildHandleLogout({setUsername, setLoginData})
  // socket.on('received-message', messageReceived => pushMessage(messageReceived))

  return (
    loginData 
      ?(
        <>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        <Wrapper>
          <RoomSpace rooms={rooms} setRooms={setRooms} setRoomSelected={setRoomSelected}/>
          {rooms.map(roomNumber => <ChatSpace roomId={roomNumber} selected={roomSelected} />)}
          <AdditionalFeatures/>
        </Wrapper>
        </>
        )
        :
        <GoogleWrapper>
          <GoogleLogin
          clientId={google_uri}
          buttonText='Sign in with Google'
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
          />
        </GoogleWrapper>
      
    
  )
}

export default App;




/* const [messages, setMessages] = useState([])
  const [user, setUser] = useState('alvaro')
  const emitMessage = () =>{
    const message = "im being pressed";
    socket.emit('message', message, user)
  }

  const pushMessage = (message) => {
    setMessages([...messages, message])
  } */