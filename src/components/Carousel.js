import React, { Component } from "react";
import "./Carousel.css";
import slide_01 from "../images/slide_01.jpg";
import slideer_02 from "../images/slideer_02.jpg";
import slider_03 from "../images/slider_03.jpg";

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
              <img src={slide_01} alt="image one" width="100%" height={500} />
            </div>
            <div className="carousel-item">
              <img src={slideer_02} alt="image two" width="100%" height={500} />
            </div>
            <div className="carousel-item">
              <img
                src={slider_03}
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
