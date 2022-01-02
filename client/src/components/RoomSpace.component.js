import React, { useEffect, useState } from 'react';
import {
    RoomsSpace,
} from './styled.components';
import RoomComponent from './Room.component';

import {
    buildHandleAddRoom,
    buildHandleDeleteRoom
} from '../handlers/index';

export default function RoomSpace (props) {
    const {rooms, setRooms, setRoomSelected, roomSelected, socket } = props
    
    const handleAddRoom = buildHandleAddRoom({rooms, setRooms})
    const handleDeleteRoom = buildHandleDeleteRoom({rooms, setRooms})

    
   

    return (
        <RoomsSpace>
            <span>
                <button onClick={handleAddRoom}>Add new Room</button>
                <button onClick={handleDeleteRoom}>Delete Room</button>
            </span>
            <ul>
                {rooms.map( (roomNumber, index) =>
                    <RoomComponent
                    socket={socket} 
                    key={index}
                    roomId={roomNumber} 
                    roomSelected={roomSelected}
                    setRoomSelected={setRoomSelected}/>)}
            </ul>
        </RoomsSpace>
    )
}