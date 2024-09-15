import React, { useState } from "react";
import { motion } from "framer-motion";

import { urlFor } from "../../client"; // You can remove this if you are not fetching images from an external source.
import "./Skills.scss";

const Skills = () => {
  const [data, setData] = useState({
    experiences: [
      {
        year: "2021",
        works: [
          {
            name: "Frontend Developer",
            company: "Tech Solutions",
            desc: "Worked on developing dynamic UIs using React.",
          },
          {
            name: "UI/UX Designer",
            company: "Design Studio",
            desc: "Designed responsive and user-friendly interfaces.",
          },
        ],
      },
      {
        year: "2022",
        works: [
          {
            name: "Full Stack Developer",
            company: "Innovative Labs",
            desc: "Built end-to-end web applications with MERN stack.",
          },
        ],
      },
    ],
    skills: [
      {
        name: "React",
        icon: "/path-to-react-icon.png",
        bgColor: "#61dafb",
      },
      {
        name: "JavaScript",
        icon: "/path-to-javascript-icon.png",
        bgColor: "#f0db4f",
      },
      {
        name: "CSS",
        icon: "/path-to-css-icon.png",
        bgColor: "#264de4",
      },
    ],
  });

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {data.skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {data.experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
