import React, {useState, useEffect} from "react"
import { Table } from 'reactstrap'

const Dashboard = () => {

    const [userDetails, setUserDetails] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    const fetchDetails = async () => {
        let response = await fetch("https://react-login-vikas.herokuapp.com/dashboard", {
            method: "GET",
            headers: {
                "Authorization" : localStorage.getItem("access-token")
            }
        })
        if(!(response.status === 403)){
            setLoggedIn(true)
            response = await response.json()
            setUserDetails(response.user)
        }
        setLoading(false)

    }

    useEffect(() => {
        fetchDetails()
    }, [])

    const handleLogout = () => {
        setLoggedIn(false)
        localStorage.removeItem("access-token")
    }

    if(loading){
        return (
            <div className = "main-contain bg-dark d-flex justify-content-center text-white container-fluid align-items-center h1">Loading....</div>
        )
    }
    return (
        loggedIn ? 
        <div className = "bg-dark d-flex flex-column container-fluid text-white main-contain justify-content-center align-items-center">
        <Table className = "mt-3 text-white align-self-center w-75">
      <tbody>
        <tr>
          <th scope="row">First Name</th>
    <td>{userDetails.firstName}</td>
        </tr>
        <tr>
          <th scope="row">Last Name</th>
    <td>{userDetails.lastName}</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
    <td>{userDetails.email}</td>
        </tr>
        <tr>
          <th scope="row">Id</th>
    <td>{userDetails.id}</td>
        </tr>
      </tbody>
    </Table>
        <button className = "btn btn-primary" onClick = {handleLogout}>Logout</button>
        </div> : <div className = "main-contain bg-dark d-flex justify-content-center text-white container-fluid align-items-center h1">Please Login</div>
    )
}

export default Dashboard

