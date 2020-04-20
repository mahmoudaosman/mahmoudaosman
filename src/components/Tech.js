import React, { Component } from "react";
import ReactLogo from "../images/react_logo.png";
import "./Tech.css";
export class Tech extends Component {
  render() {
    return (
      <div className="built-with-react">
        <div className="container">
          <div className="built-with-items"></div>
        </div>
      </div>
    );
  }
}

export default Tech;
