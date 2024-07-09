import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [Toggle, setToggle] = useState(true);
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
      {/* //Hamburger menu for mobile devices */}

      <div className="app_navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {Toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
