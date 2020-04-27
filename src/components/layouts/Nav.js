import React, { Component } from "react";
import "./Nav.css";
import mahmoud from "../images/mahmoud.jpg";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div id="main-nav">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a
            className="navbar-brand"
            href="https://mahmoudaosman.github.io/mahmoudaosman"
          >
            <img src={mahmoud} className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Portfolio
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Techknowlege
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Socio-work
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Design
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Skills
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="components/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

//https://magic.reactjs.net/htmltojsx.htm
//HTML - REACT Converter
