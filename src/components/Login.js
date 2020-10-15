import React,{useState} from "react"
import {useHistory} from "react-router-dom"

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userMessage, setUserMessage] = useState("")
    const history = useHistory()

    const loginUser = async () => {
        const data = {
            email, password
        }
        setEmail("")
        setPassword("")
        let response = await fetch("https://react-login-vikas.herokuapp.com/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        response = await response.json()
        if(response.stat === "S"){
            localStorage.setItem("access-token", response.accessToken)
            history.push("/dashboard")
            return
        }
        setUserMessage(response.message)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser()
    }

    const handleForgotPassword = () => {
        history.push("/forgot-password")
    }

    return (
        <div className = "bg-dark d-flex flex-column container-fluid text-white main-contain">
        <form onSubmit = {handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id = "email" value = {email} onChange ={e => setEmail(e.target.value)} required  className = "form-control w-50 mb-2"/>
        <label htmlFor="password">Password</label>
        <input type="password" id = "password" value = {password} onChange = {e => setPassword(e.target.value)} required  className = "form-control w-50 mb-3"/>
        <button className = "btn btn-primary mb-3" type = "submit">Login</button>
        </form>
    {userMessage ? <h3>{userMessage}</h3> : null}
        <div>
            <h6>New user? </h6>
            <button onClick = {props.clickFunction} className = "btn btn-success mb-3">Register</button>
        </div>
        <div>
            <h6>Forgot Password? </h6>
            <button className = "btn btn-danger" 
            onClick = {handleForgotPassword}>Forgot Password</button>
        </div>
        </div>
    )
}

export default Login