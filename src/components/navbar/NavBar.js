import React, { useState } from "react";
import "./NavBar.css";
import myImage from "./download.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div>
          {" "}
          <span>
            <img src={myImage} alt="Logo" className="navbar-logo" />
          </span>
          Xurya
        </div>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/feature">Feature</a>
        </li>
        <li>
          <a href="services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="login-icon">
        <button className="login-button">Login</button>
        <button className="get-button">Get in touch</button>
      </div>
    </nav>
  );
};

export default NavBar;
