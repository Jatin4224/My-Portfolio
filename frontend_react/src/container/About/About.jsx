import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { images } from "../../constants";
// import { urlFor, client } from "../../client";
const abouts = [
  {
    title: "Frontend Developer",
    description:
      "Crafting dynamic user interfaces with React and building responsive designs using Tailwind CSS. Ensuring cross-browser compatibility and performance, implementing interactive features and animations, and optimizing frontend performance and load times.",
    imgUrl: images.about01,
  },
  {
    title: "Backend Developer",
    description:
      "Developing scalable server-side applications with Node.js and designing/managing databases using MongoDB. Creating RESTful APIs for seamless data exchange, implementing authentication and authorization, and ensuring data integrity and security.",
    imgUrl: images.about02,
  },
  {
    title: "3D Artist",
    description:
      "Creating detailed 3D models with Blender, texturing and shading for realistic visuals, and animating 3D assets for interactive experiences. Designing 3D environments and scenes, and rendering high-quality images and videos.",
    imgUrl: images.about03,
  },
  {
    title: "UI/UX Designer",
    description:
      "Designing user-friendly interfaces with Figma, conducting user research and usability testing, and creating wireframes and prototypes. Ensuring a consistent and cohesive design language, and collaborating with developers to implement designs.",
    imgUrl: images.about04,
  },
];

const About = () => {
  ///fetching daa from sanity using client
  // const [abouts, setAbouts] = useState([]);
  // useEffect(() => {
  //   const query = '*[_type == "Abouts"]';

  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);
  return (
    <>
      <h2 className="head-text">
        Bridging the Gap between <span>Design</span> and <span>Dev</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
