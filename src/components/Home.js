import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-container">
      {/* Background glow effect */}
      <div className="background-glow"></div>

      <motion.div
        className="home-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hey, I'm <span className="highlight">Aditi Mishra</span>
        </motion.h1>

        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="role-highlight">Bridging code and cognition - </span><br />
          building dynamic full-stack apps fueled by the magic of AI and machine learning to transform ideas into intelligent solutions.
        </motion.p>

        <motion.div
          className="home-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link to="projects" smooth={true} duration={500} className="btn">
            View Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="btn btn-outline">
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
