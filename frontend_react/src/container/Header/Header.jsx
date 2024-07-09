import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./Header.scss";
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-info">
          <div className="badge-cmp app__flex">
            <span>👋🏻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Jatin</h1>
            </div>

            <div className="tag-cmp app_flex"></div>
            <p className="p-text">Full-Stack developer</p>
            <p className="p-text">3D Art Enthusiast</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>
      <motion.div></motion.div>
    </div>
  );
};

export default Header;
