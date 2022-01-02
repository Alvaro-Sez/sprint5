import styled from 'styled-components';

export const Wrapper = styled.div`
    width:1200px;
    height:800px;
    margin: 40px auto;
    border: 3px solid black;
    border-radius: 10px;
    display:flex;
    background-color: #8C1C13;
`
export const GoogleWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: center;
`

export const RoomsSpace = styled.div`
    width:250px;
    height: 99%;
    margin:3px;
    border-radius:10px 0px 0px 10px;
    background-color:#BF4342;
    display:flex;
    flex-direction:column;
    ul{
        list-style-type: none;
        margin:0;
        padding:0;
        height: 90%;
    }
    span{
        height: 5%;
        display:flex;
        justify-content: space-between;
    }
    span button {
        width: 50%;
    }
`

export const Room = styled.li`
    width: 230px;
    height: 40px;
    background-color: lightpink;
    margin:7px;
    border:3px solid black;
    border-radius: 8px;
    text-align:center;
    padding-top:10px;
    font-weight:bold;
    ${({active})=> active && `
        background-color:black;
        color:lightpink;
    `}
`


export const Chat = styled.div`
    width: 470px;
    height: 99%;
    background-color:white;
    margin:3px;
    display:none;
    flex-direction:column;
    ${({active})=> active && `
        display:flex;
    `}
`

export const ChattingSpace = styled.ul`
    height: 90%;
    width: 99%;
    background-color: lightgrey;
    margin:2px;
    padding:0;
    list-style-type:none;
    overflow:scroll;
    overflow-x: hidden;
    display:flex;
    flex-direction:column;
`


export const WriteMessageSpace = styled.div`
    height: 10%;
    width: 98%;
    border-radius:15px;
    background-color: lightblue;
    margin:2px auto;
    display:flex;
    input{
        width:85%;
        margin:10px;
        margin-right:0;
        font-size:16px;
        font-weight:bold;
    }
    button{
        margin:10px;
        width:13%;
        margin-left:5px;
    }
`

export const SendMessageButton = styled.button`
`

export const AdditionalFeaturesContainer = styled.div`
    width:460px;
    margin:3px;
    display:flex;
    flex-direction:column;
`



export const CamSpace = styled.div`
    width: 99%;
    height: 50%;
    background: grey;
    margin:3px;
    border-radius: 0 10px 0 0;
`

export const HistorySpace = styled.div`
    width: 99%;
    background: grey;
    height: 50%;
    margin:3px;
    border-radius: 0 0 10px 0;
`

export const SearchHistoryButton = styled.button`
`

export const Message = styled.li`
    height: max-content;
    background-color: #d3ffd8;
    font-size:16px;
    border:1px solid black;
    border-radius:10px;
    margin:15px;
    padding:10px;
    width:70%;
    align-self:end;
    padding-top:0;
    padding-left:5px;
    display:flex;
    flex-direction:column;
    span{
        width:100px;
        font-size:14px;
        font-weight:bolder;
    }
    p{
        font-weight:bold;
        margin:10px;
        word-break: break-all;
    }
`

export const MyMessage = styled.li`
`

export const LogoutButton = styled.button`
    position: absolute;
    background-color: #BF4342;
    width: 250px;
    font-size:18px;
    font-weight: bold;
    top:10px;
    right:45%;
`
