import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Work.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      title: images.about01,
      description: "Web Application",
      category: "webApp",
    },
    {
      title: "Project 2",
      description: "AI Generated Content",
      category: "GenAi",
    },
    {
      title: "Project 3",
      description: "3D Art",
      category: "3D Art",
    },
    {
      title: "Project 4",
      description: "Web Application",
      category: "webApp",
    },
    {
      title: "Project 5",
      description: "AI Generated Content",
      category: "GenAi",
    },
  ];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {["All", "webApp", "GenAi", "3D Art"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        className="app__work-portfolio"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <div key={index} className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={project.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileTap={{ scale: 0.95 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileTap={{ scale: 0.95 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              {/* <h4 className="bold-text">{project.title}</h4> */}
              <p className="p-text">{project.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
