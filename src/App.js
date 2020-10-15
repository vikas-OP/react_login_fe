import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"
import Dashboard from "./components/Dashboard"
import LoginSignup from "./components/LoginSignup"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path = "/forgot-password" component = {ForgotPassword} />
        <Route path = "/dashboard" component = {Dashboard} />
        <Route path = "/reset-password/:id" component = {ResetPassword} />
        <Route path = "/" component = {LoginSignup}/>
      </Switch>
    </Router>  
  )
}

export default App;
