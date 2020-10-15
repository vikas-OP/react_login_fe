import React, {useState} from "react"
import {useHistory} from "react-router-dom"


const Signup = (props) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [userMessage, setUserMessage] = useState("")

    const setFirstName = (e) => {setUser({...user, firstName: e.target.value})} 
    const setLastName = (e) => {setUser({...user, lastName: e.target.value})} 
    const setEmail = (e) => {setUser({...user, email: e.target.value})} 
    const setPassword = (e) => {setUser({...user, password: e.target.value})} 


    const registerUser = async () => {
        const data = {...user}
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })
        let response = await fetch("https://react-login-vikas.herokuapp.com/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        response = await response.json()
        setUserMessage(response.message)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        registerUser()
    }

    return(
        <div className = "main-contain bg-dark d-flex flex-column text-white container-fluid ">
            <form onSubmit = {handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id = "fname" value = {user.firstName} onChange ={setFirstName} required className = "form-control w-50 mb-2" />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id = "lname" value = {user.lastName} onChange ={setLastName} required className = "form-control w-50 mb-2" />
                <label htmlFor="email">Email</label>
                <input type="text" id = "email" value = {user.email} onChange ={setEmail} required className = "form-control w-50 mb-2" />
                <label htmlFor="password">Password</label>
                <input type="password" id = "password" value = {user.password} onChange ={setPassword} required className = "form-control w-50 mb-2"/>
                <button type = "submit" className = "btn btn-success my-3">Register</button>
            </form>
            <div>
                <h6>Login user</h6>
                <button className = "btn btn-primary" onClick = {props.clickFunction}>Login</button>
            </div>
    {userMessage ? <h3>{userMessage}</h3> : null}
        </div>
    )
}

export default Signup