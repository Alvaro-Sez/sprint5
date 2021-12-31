import React from 'react';
import {
    Room
} from './styled.components'

export default function RoomComponent (props) {
    const {roomId, setRoomSelected} = props

    const handleOnClickRoom = (e) => {
        setRoomSelected(roomId)
    }

    return (
        <>
        <Room onClick={handleOnClickRoom}>Room {roomId}</Room>
        </>
    )
}