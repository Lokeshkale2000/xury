import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="topSection">
          <div className="headingSection">
            <h2 className="mainHeading">
              It's time to support zero pollution,
              <div className="subHeading">with renewable resources</div>
            </h2>
            <div className="features">
              <div className="feature">
                <div className="greenDot"></div>
                <span className="featureText">
                  Experienced for more than 10 years
                </span>
              </div>
              <div className="feature">
                <div className="greenDot"></div>
                <span className="featureText">
                  Support for the latest technology
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="description">
              By increasing the effectiveness and efficiency of electricity use,
              the use of renewable resources is very profitable for all
              industrial services.
            </p>
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
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="navigation">
          <a href="/" className="logo">
            <div className="greenDot"></div>
            Xurya
          </a>

          <nav className="nav">
            <a href="/" className="navLink">
              Home
            </a>
            <a href="/about" className="navLink">
              About Us
            </a>
            <a href="/features" className="navLink">
              Features
            </a>
            <a href="/services" className="navLink">
              Services
            </a>
            <a href="/contact" className="navLink">
              Contact
            </a>
          </nav>

          <div className="socialLinks">
            <div className="socialIcon">in</div>
            <div className="socialIcon">x</div>
            <div className="socialIcon">f</div>
            <div className="socialIcon">in</div>
          </div>
        </div>

        <div className="bottomSection">
          <div>© 2024 Xurya Inc. All rights reserved</div>
          <div className="legalLinks">
            <a href="/terms" className="legalLink">
              Terms of Service
            </a>
            <a href="/privacy" className="legalLink">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
