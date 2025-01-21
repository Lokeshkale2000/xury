import React from "react";
import solarparking from "./solarparking.png";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="section">
      <h2 className="heading" style={{ color: "black" }}>
        See how we solve problems,{" "}
        <span className="highlight">right on target</span>
      </h2>

      <div className="testimonial-container">
        <div className="content">
          <div className="logo">Medtronic</div>
          <p className="quote">
            "We have used services from Xurya for most of our stations, this is
            our strategic step to continue to increase the number of solar panel
            usage for our stations, we are very satisfied with the services from
            Xurya."
          </p>
          <button className="button">View case study</button>

          <div className="author">
            <span className="author-name">Jennifer Kolobaly</span>
            <span className="author-title">CTO EV Medtronic</span>
          </div>
        </div>

        <div className="image-container">
          <img
            src={solarparking}
            alt="Solar panel installation"
            className="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
