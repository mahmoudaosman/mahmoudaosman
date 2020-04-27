import React from "react";
import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="danger"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="/">
          Mahmoud Osman
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/">
              <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/about">
              <ReactBootStrap.Nav.Link href="/about">
                About
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/skills">
              <ReactBootStrap.Nav.Link href="/skills">
                Skills
              </ReactBootStrap.Nav.Link>
            </Link>

            <ReactBootStrap.NavDropdown
              title="More"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Portfolio
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Technowledge
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Scocio-work
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Design
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="/Skills">
                Skills
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <Link to="/education">
              <ReactBootStrap.Nav.Link href="/education">
                Education
              </ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/marketing">
              <ReactBootStrap.Nav.Link href="/marketing">
                Marketing
              </ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/contact">
              <ReactBootStrap.Nav.Link href="/contact">
                Contact
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav>
            <Link to="/signup">
              <ReactBootStrap.Nav.Link href="#Signup">
                Sign Up
              </ReactBootStrap.Nav.Link>
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
  );
};

export default NavBar;
