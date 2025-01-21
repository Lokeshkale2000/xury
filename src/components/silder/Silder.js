import React from "react";
import manwith from "./Man.png";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <div className="main-slide">
        <div>
          <h1>Trusted service, for your various needs </h1>
          <button className="get-button-btn">Get in touch</button>
          <div className="slider-grid-solar">
            <div>
              <p>01</p>
              <h5>Solar panels for home</h5>
              <h6>View Details</h6>
            </div>
            <div>
              <p>02</p>
              <h5>Solar panels for industry</h5>
              <h6>View Details</h6>
            </div>
            <div>
              <p>03</p>
              <h5>Solar panels for changes</h5>
              <h6>View Details</h6>
            </div>
            <div>
              <p>04</p>
              <h5>Solar panels for generator</h5>
              <h6>View Details</h6>
            </div>
          </div>
        </div>
        <div className="solar-image">
          <img src={manwith} alt="Man with solar panels" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
