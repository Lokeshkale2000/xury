import React from "react";
import windmill from "./windmill.jpg";
import mill from "./mill.jpg";
import "./Main.css"; 

const Main = () => {
  return (
    <div className="container">
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${windmill})` }} // Dynamically add background image
      >
        <div className="overlay" />
      </div>

      <div className="mainContent">
        <div className="headerSection">
          <p className="tagline">#1 Energy provider in the world</p>
          <h1 className="heading">
            New Energy
            <br />
            for the Future
          </h1>
        </div>

        <div className="buttonContainer">
          <button className="button">
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="button">
            Our services
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="statsContainer">
          <div className="statBox">
            <h2 className="statNumber">6 mil</h2>
            <p className="statText">
              The company's
              <br />
              annual net income
            </p>
          </div>
          <div className="statBox">
            <h2 className="statNumber">315</h2>
            <p className="statText">
              Projects completed
              <br />
              worldwide
            </p>
          </div>
          <div className="statBox">
            <h2 className="statNumber">120K</h2>
            <p className="statText">
              Employees work in all
              <br />
              parts of the world
            </p>
          </div>
        </div>

        <div className="projectCard">
          <img src={mill} alt="Wind turbine" className="projectImage" />
          <h3 className="projectTitle">Discover Our</h3>
          <p className="projectSubtitle">Recent Project</p>
          <button className="arrowButton">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
