import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavigationBar = () => {
     const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
return (
    <>
      <Navbar color="light" light expand="md" className = "sticky-top">
        <Link to="/" className = "navbar-brand">Login/Signup</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/forgot-password" className = "nav-link">Forgot Password</Link>
            </NavItem>
            <NavItem>
              <Link to="/dashboard" className = "nav-link">Dashboard</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>

)

}

export default NavigationBar
