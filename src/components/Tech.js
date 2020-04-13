import React, { Component } from "react";
import ReactLogo from "../images/react_logo.png";
import "./Tech.css";
export class Tech extends Component {
  render() {
    return (
      <div className="built-with-react">
        <div className="container">
          <div className="built-with-items">
            <div className="row">
              <div className="col-md-6">
                <h2>Built with:</h2>
              </div>

              <div className="col-md-6">
                <img
                  src={ReactLogo}
                  className="img-responsive"
                  alt="React Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tech;
