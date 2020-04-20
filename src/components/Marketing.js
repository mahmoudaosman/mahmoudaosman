import React, { Component } from "react";
import "./Marketing.css";

export class Marketing extends Component {
  render() {
    return (
      <div>
        <section className="marketing-intro text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-xs-12">
                <i
                  className="fa fa-diamond fa-5x fw wow wobble"
                  aria-hidden="true"
                  style={{ visibility: "visible", animationName: "wobble" }}
                />
                <h3>IMPRESSIVE WEBSITES</h3>
              </div>
              <div className="col-lg-3 col-xs-12">
                <i
                  className="fa fa-volume-up fa-5x fw wow wobble"
                  aria-hidden="true"
                  style={{ visibility: "visible", animationName: "wobble" }}
                />
                <h3
                  className="wow pulse"
                  style={{ visibility: "visible", animationName: "pulse" }}
                >
                  DIGITAL MARKETING
                </h3>
              </div>
              <div className="col-lg-3 col-xs-12">
                <i
                  className="fa fa-map fw wow wobble"
                  aria-hidden="true"
                  style={{ visibility: "visible", animationName: "wobble" }}
                />
                <h3
                  className="wow pulse"
                  style={{ visibility: "visible", animationName: "pulse" }}
                >
                  SEARCH ENGINE OPTIMAZATION
                </h3>
              </div>
              <div className="col-lg-3 col-xs-12">
                <i
                  className="fa fa-window-restore fa-5x fw wow wobble"
                  aria-hidden="true"
                  style={{ visibility: "visible", animationName: "wobble" }}
                />
                <h3
                  className="wow pulse"
                  style={{ visibility: "visible", animationName: "pulse" }}
                >
                  100% MOBILE RESPONSIVE
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Marketing;
