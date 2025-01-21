import React from "react";
import image1 from "./images1.png";
import image2 from "./images2.png";
import image3 from "./Bz.jpg";
import image4 from "./bot.png";
import image5 from "./Med.png";
import "./Review.css";

const clients = [
  { name: "Trend Micro", logo: image1 },
  { name: "Telia Cygate", logo: image2 },
  { name: "Business", logo: image3 },
  { name: "Headspace", logo: image4 },
  { name: "Medtronic", logo: image5 },
];

const Review = () => {
  return (
    <section className="section">
      <div className="header">
        <h2 className="heading" style={{ color: "black" }}>
          Focusing on quality,{" "}
          <span className="highlight">we maintain customer trust</span>
        </h2>
        <p className="description">
          We ensure that every installation we build has strict quality checks.
          Sustainable solutions for an environmentally friendly and renewable
          future.
        </p>
      </div>

      <div className="logoGrid">
        {clients.map((client, index) => (
          <div
            key={index}
            className="logoContainer"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
