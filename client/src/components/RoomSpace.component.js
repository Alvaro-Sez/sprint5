import React, { useEffect, useState } from 'react';
import {
    RoomsSpace,
} from './styled.components';
import RoomComponent from './Room.component';

import {
    buildHandleAddRoom,
    buildHandleDeleteRoom
} from '../handlers/index';

export default function RoomSpace () {
    const [rooms, setRooms] = useState([1,2,3])
    const [roomSelected, setRoomSelected] = useState(false)

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
                    key={index}
                    roomId={roomNumber} 
                    setRoomSelected={setRoomSelected}/>)}
            </ul>
        </RoomsSpace>
    )
}