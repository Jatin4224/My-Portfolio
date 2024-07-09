import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";
const Navbar = () => {
  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app_navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app_flex p-text" key={`Link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
