import React, { Component } from "react";
import "./Carousel.css";

export class Carousel extends Component {
  render() {
    return (
      <div className="images_slides">
        <div id="image-slider" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li
              data-target="#image-slider"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#image-slider" data-slide-to={1} />
            <li data-target="#image-slider" data-slide-to={2} />
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg"
                alt="image one"
                width="100%"
                height={500}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/05/a-developer-s-deep-dive-on-crawler-traps-causes-solutions-prevention-760x400.png"
                alt="image two"
                width="100%"
                height={500}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://p.ecopetit.cat/wpic/lpic/108-1082822_closeup-code-screen-web-design-technology-internet-computer.jpg"
                alt="image three"
                width="100%"
                height={500}
              />
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#image-slider"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </a>
          <a
            className="carousel-control-next"
            href="#image-slider"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
