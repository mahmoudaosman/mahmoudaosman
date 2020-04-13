import React, { Component } from "react";
import "./Education.css";
import bachelor02 from "../images/bachelor02.png";
import ccv02 from "../images/ccv02.png";
import certs02 from "../images/certs02.png";

export class Education extends Component {
  render() {
    return (
      <section className="education">
        <div className="education-bg">
          <div className="container">
            <div className="education-header">
              <h1 className="text-center">Education</h1>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="bacholer text-center">
                  <img src={bachelor02} alt="education" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="associate">
                  <img src={ccv02} alt="education" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="certs">
                  <img src={certs02} alt="education" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
