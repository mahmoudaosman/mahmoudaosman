import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h5 className="text-uppercase">tech stack</h5>
              <ul className="list-unstyled three-column">
                <li>Node.js</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Java</li>
                <li>Grails</li>
                <li>Laravel</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h5>WEB TECHNOLOGIES</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-4">
              <h5>CONTENT MANAGEMENT SYSTEMS</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center">
          <p>
            &copy; Copyright {new Date().getFullYear()}. Mahmoud Osman.
            Allrights Reserved.
          </p>
        </div>
      </section>
    );
  }
}

export default Footer;
