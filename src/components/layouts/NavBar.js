import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
              <ReactBootStrap.Navbar.Brand href="#home">Mahmoud Osman</ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">

                <Link to="/">
                <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                </Link>

                <Link to="/skills">
                <ReactBootStrap.Nav.Link href="#Skills">Skills</ReactBootStrap.Nav.Link>
                </Link>

                <Link to="/pricing">
                <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
                </Link>
                  <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                  </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                <Link to="/signup">
                <ReactBootStrap.Nav.Link href="#Signup">Sign Up</ReactBootStrap.Nav.Link>
                </Link>
                <Link to="/login">
                <ReactBootStrap.Nav.Link eventKey={2} href="#Login">
                    Login
                  </ReactBootStrap.Nav.Link>
                </Link>
                </ReactBootStrap.Nav>
              </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;
