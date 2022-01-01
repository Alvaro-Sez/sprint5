import React from 'react';
import {
    Chat,
    WriteMessageSpace,
    ChattingSpace
} from './styled.components'

export default function ChatSpace(props) {
    const {roomId, selected} = props

    return (
        <Chat active={roomId===selected}>
            <ChattingSpace/>
            <WriteMessageSpace>
                <input></input>
                <button>Send</button>
            </WriteMessageSpace>
        </Chat>
    )
}