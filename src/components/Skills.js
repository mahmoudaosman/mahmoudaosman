import React, { Component } from "react";
import "./Skills.css";

export class Skills extends Component {
  render() {
    return (
      <div className="main-skills">
        <div className="container">
          <div className="skill-header">
            <h1>Skills</h1>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "99%" }}>
              HTML
            </div>
          </div>
          <br />
          <div className="progress">
            <div className="progress-bar bg-success" style={{ width: "85%" }}>
              React
            </div>
          </div>
          <br />
          <div className="progress">
            <div className="progress-bar bg-info" style={{ width: "99%" }}>
              CSS3
            </div>
          </div>
          <br />
          <div className="progress">
            <div className="progress-bar bg-warning" style={{ width: "80%" }}>
              JavaScript
            </div>
          </div>
          <br />
          <div className="progress">
            <div className="progress-bar bg-danger" style={{ width: "75%" }}>
              Express
            </div>
          </div>
          <br />
          <div className="progress">
            <div className="progress-bar bg-primary" style={{ width: "99%" }}>
              Boostrap
            </div>
          </div>
          <br />
          <div className="progress">
            <div className="progress-bar bg-danger" style={{ width: "75%" }}>
              Java
            </div>
          </div>
          <br />
          <div className="progress">
            <div className="progress-bar bg-success" style={{ width: "80%" }}>
              SQL
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
