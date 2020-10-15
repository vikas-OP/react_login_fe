import React, {useState} from "react"
import Login from "./Login"
import Signup from "./Signup"

const LoginSignup = () => {
    const [isNewUser, setIsNewUser] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false) 

    const handleUser = () => {
        isNewUser ? setIsNewUser(false) : setIsNewUser(true)
    } 


    const handleLogout =() => {
        localStorage.removeItem("access-token")
        setIsLoggedIn(false)
    }

    if(isLoggedIn){
        return <button onClick = {handleLogout}>Log out</button>
    }
    return isNewUser ? <Signup clickFunction = {handleUser} /> : <Login clickFunction = {handleUser} />
}

export default LoginSignup