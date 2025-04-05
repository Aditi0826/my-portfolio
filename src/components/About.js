import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2
        className="about-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="glow">About Me</span>
      </motion.h2>

      <motion.div
        className="about-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          <img src="/assets/images/profile.jpg" alt="Profile" />
        </div>

        <div className="about-content">
          <p>
            I'm a passionate and motivated web developer, currently pursuing my
            education in Computer Science. I love crafting modern, responsive
            web applications that blend performance with great UI/UX.
          </p>
          <p>
            My core stack includes React, Node.js, MongoDB, and PHP, but I’m
            always excited to explore and learn new technologies. I've built
            scalable systems and collaborated in agile teams to bring ideas to
            life.
          </p>
          <p>
            Outside of code, I enjoy using Canva, exploring new tools, and
            working with data science tools like Jupyter and Scilab.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
