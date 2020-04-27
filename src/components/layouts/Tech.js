import React, { Component } from "react";
import slider_03 from "../images/slider_03.jpg";
import built_with from "../images/built_with.png";
//import ReactLogo from "../images/react_logo.png";
import "./Tech.css";
export class Tech extends Component {
  render() {
    return (
      <div className="built-with-react">
        <div className="container">
          <div className="built-with-items">
            <img src={built_with} className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tech;
