const buildHandleFailure = () => {
    const handleFailure = (result) => {
        alert(result.error)
    }
    return handleFailure
}

const buildHandleLogin = ({setUsername, setLoginData}) => {
    const handleLogin = (googleData) => {
        console.log(googleData)
        setLoginData(googleData)
        localStorage.setItem('loginData', JSON.stringify(googleData) )
        setUsername(googleData.yu.qf)
      }
    return handleLogin
}

const buildHandleLogout = ({setUsername, setLoginData}) => {
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
        setUsername(null)
      }
    return handleLogout
}

const buildHandleAddRoom = ({setRooms, rooms}) => {
    const handleAddRoom = () => {
        if(rooms.length >= 10){
            alert("max rooms reached")
            return null
        }
        setRooms([...rooms, rooms.length+1])
    } 
    return handleAddRoom
}

const buildHandleDeleteRoom = ({setRooms, rooms}) => {
    const handleDeleteRoom = () => {
        if(rooms.length < 4 ) {
            alert("you cant have less than 3 rooms")
            return null
        }
        const arr = rooms.slice(0, rooms.length - 1 )
        
        setRooms([...arr])
    }
    return handleDeleteRoom
}



export { 
    buildHandleFailure, 
    buildHandleLogin, 
    buildHandleLogout, 
    buildHandleAddRoom, 
    buildHandleDeleteRoom
}