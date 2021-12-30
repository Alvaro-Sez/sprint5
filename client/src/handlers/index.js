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

export { buildHandleFailure, buildHandleLogin, buildHandleLogout }