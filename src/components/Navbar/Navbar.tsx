import React from "react";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">EliteGraphics</h1>

      <ul className="navbar__list">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Services</li>
        <li className="navbar__item">Projects</li>
        <li className="navbar__item">Contact Me</li>
      </ul>
    </div>
  );
};
