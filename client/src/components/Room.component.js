import React from 'react';
import {
    Room
} from './styled.components'

export default function RoomComponent (props) {
    const {roomId, setRoomSelected, roomSelected, socket} = props

    const handleOnClickRoom = (e) => {
        setRoomSelected(roomId)
        socket.emit('join-room', roomId)
    }

    return (
        <>
        <Room onClick={handleOnClickRoom} active={roomId===roomSelected}>Room {roomId}</Room>
        </>
    )
}