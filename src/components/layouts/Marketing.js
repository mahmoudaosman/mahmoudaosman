import React, { Component } from "react";
import "./Marketing.css";

export class Marketing extends Component {
  render() {
    return (
      <section
        className="digital-main wow pulse"
        id="digital-marketing"
        style={{ visibility: "visible", animationName: "pulse" }}
      >
        <div className="digital-marketing">
          <div className="container">
            <div className="row">
              <h2 className="text-center">I can help you with</h2>
              <div className="col-md-4">
                <i
                  className="fa fa-paint-brush wow fadeInLeftBig"
                  aria-hidden="true"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInLeftBig"
                  }}
                />
                <h3
                  className="wow slideOutLeft"
                  style={{
                    visibility: "visible",
                    animationName: "slideOutLeft"
                  }}
                >
                  Web Design
                </h3>
                <p>Let the expert design astonishing websites for you.</p>
              </div>
              <div className="col-md-4">
                <i
                  className="fa fa-code wow fadeInRightBig"
                  aria-hidden="true"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRightBig"
                  }}
                />
                <h3
                  className="wow slideOutLeft"
                  style={{
                    visibility: "visible",
                    animationName: "slideOutLeft"
                  }}
                >
                  Web Programming
                </h3>
                <p>
                  Coding and maintaining web applications can be challenging.
                  However, I can help you coding, maintaining and designing your
                  website because I have the skills and the experience.
                </p>
              </div>
              <div className="col-md-4">
                <i
                  className="wow fa fa-money wow fadeInLeftBig"
                  aria-hidden="true"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInLeftBig"
                  }}
                />
                <h3
                  className="wow slideOutLeft"
                  style={{
                    visibility: "visible",
                    animationName: "slideOutLeft"
                  }}
                >
                  Google Adwords
                </h3>
                <p>
                  Get your ads seen by your audience when they search on the
                  internet
                </p>
              </div>
            </div>
            {/* End of the first row*/}
            {/* start of the second row*/}
            <div className="row">
              <div className="col-md-4">
                <i
                  className="fa fa-search wow fadeInRightBig"
                  aria-hidden="true"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRightBig"
                  }}
                />
                <h3
                  className="wow slideOutLeft"
                  style={{
                    visibility: "visible",
                    animationName: "slideOutLeft"
                  }}
                >
                  SEO
                </h3>
                <p>
                  Make your website visible in the search engines and rank high
                  #1 in the search engines using organic searching method and do
                  not spend too much money on paid ads.
                </p>
              </div>
              <div className="col-md-4">
                <i
                  className="fa fa-line-chart wow fadeInLeftBig"
                  aria-hidden="true"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInLeftBig"
                  }}
                />
                <h3
                  className="wow slideOutLeft"
                  style={{
                    visibility: "visible",
                    animationName: "slideOutLeft"
                  }}
                >
                  Google Analytics
                </h3>
                <p>
                  Get your website insights to help you grow your business
                  online and make the right decision.
                </p>
              </div>
              <div className="col-md-4">
                <i
                  className="fa fa-envelope-o wow fadeInRightBig"
                  aria-hidden="true"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRightBig"
                  }}
                />
                <h3
                  className="wow slideOutLeft"
                  style={{
                    visibility: "visible",
                    animationName: "slideOutLeft"
                  }}
                >
                  Email Marketing
                </h3>
                <p>
                  Keep in touch with your customers &amp; contacts with
                  beautifully designed emails templates.
                </p>
              </div>
            </div>
            {/* End of the second row*/}
            <div className="row">
              <div className="col-md-4 col-md-offset-4 col-xs-offset-1">
                <span className="get-started_now">
                  <a href="https://www.netsansoftware.com/contact">
                    <button className="btn btn-primary">Get Started </button>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Marketing;
