import React, { Component } from "react";
import "./About.css";
import bachelor02 from "../images/bachelor02.png";
import ccv02 from "../images/ccv02.png";
import certs02 from "../images/certs02.png";
import mahmoud from "../images/mahmoud.jpg";

export class About extends Component {
  render() {
    return (
      <div>
        {/* Start of About section */}
        <section className="about">
          <div className="container">
            <div className="about-me">
              <h1>About me</h1>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card" style={{ width: "100%" }}>
                  <img src={mahmoud} className="card-img-top" alt="Mahmoud" />
                  <div className="card-body text-center">
                    <h2 className="card-title">Mahmoud Osman</h2>
                    <hr />
                    <h4>Full Stack Developer</h4>
                    <hr />
                    <p className="card-text text-muted">
                      {" "}
                      I've <i>7+ years</i> of experience in software
                      development!
                    </p>
                    <hr />
                    <p>
                      Email Me at: <br /> mahmoudosman.som@gmail.com
                    </p>
                    <hr />
                    <p>Call me at: 802-324-2715</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="about-info">
                  <p>
                    <b>Mahmoud Osman </b> is an entrepreneur, software/web
                    designer and developer.
                    <br />{" "}
                  </p>
                  <p>
                    He studied at{" "}
                    <a href="http://www.champlain.edu/" target="_blank">
                      {" "}
                      Champlain College
                    </a>
                    , and he has a bachelor's degree of computer science
                    specialized in Web Design and Development.
                  </p>
                  <p>
                    On the other side, he has an associate degree of Computer
                    Systems Management from{" "}
                    <a href="http://ccv.edu/" target="_blank">
                      {" "}
                      Community College of Vermont
                    </a>
                    . Additionally, he also has three additional web
                    certificates, <i>a web design</i>, <i>web programming</i>,{" "}
                    <i>and php programming.</i>{" "}
                  </p>
                  <p>
                    Moreover, he is a new starter and an entrepreneur of web
                    design and development business and uses modern web
                    technologies. He is devoted to modern technologies and he is
                    into the ever changing web technologies and designs where he
                    believes that web technology can make a change.
                  </p>
                  <p>
                    {" "}
                    Indeed, he is a web programmer and uses multiple web
                    programming technologies such as HTML5, CSS3, JavaScript,
                    Bootstrap, PHP, Sass, and JQuery. Also, he uses other
                    Content Management Systems or CMS technologies such as
                    Drupal and WordPress and builds with responsive and database
                    driven applications.
                  </p>
                  <div className="panel-footer">
                    <span className="text-muted">
                      Mahmoud Osman - Short Bio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of About section */}

        {/*Start of Education section */}
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
        {/*End of Education section */}
      </div>
    );
  }
}

export default About;
