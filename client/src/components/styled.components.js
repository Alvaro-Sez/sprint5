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
`

export const Chat = styled.ul`
    width: 430px;
    height: 99%;
    background-color:white;
    margin:3px;
`
export const AdditionalFeaturesContainer = styled.div`
    width:460px;
    margin:3px;
    display:flex;
    flex-direction:column;
`

export const WriteMessage = styled.div`
`

export const SendMessageButton = styled.button`
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