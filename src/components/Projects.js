import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Library Management System",
    description: "A full-stack system using PHP, MySQL, HTML/CSS, and JavaScript with role-based access, book management, and user handling.",
    tech: "PHP, MySQL, Bootstrap, JavaScript",
    link: "https://github.com/Aditi0826/Library-Management-System",
  },
  {
    id: 2,
    title: "Project Management Tool",
    description: "A full-stack tool using React.js, Node.js, and MongoDB/PostgreSQL with project/task management, user authentication, and collaboration tools.",
    tech: "React.js, Node.js, Express.js, MongoDB/PostgreSQL",
    link: "https://github.com/Aditi0826/Project-Management",
  },
  {
    id: 3,
    title: "User Management App",
    description: "A React-based user management app with login authentication, user list, dark mode toggle, and logout feature.",
    tech: "React.js, Firebase, TailwindCSS",
    link: "https://github.com/Aditi0826/internshala-global",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description: "A fully functional Amazon-like eCommerce store with cart management, user authentication, and payment gateway integration.",
    tech: "React.js, Redux, Firebase, Stripe API",
    link: "https://github.com/Aditi0826/Amazon-Clone",
  },
  {
    id: 5,
    title: "Super Mario Portfolio",
    description: "A fun and interactive Super Mario-themed portfolio showcasing projects and skills in a unique gamified way.",
    tech: "HTML, CSS, JavaScript, GSAP",
    link: "https://github.com/Aditi0826/Super-mario",
  },
  {
    id: 6,
    title: "Stock Prediction Web App",
    description: "A web app that predicts stock prices using machine learning, visualizes trends, and provides real-time market analysis.",
    tech: "Python, Flask, React.js, TensorFlow",
    link: "https://github.com/yourgithub/stock-prediction",
  },
  {
    id: 7,
    title: "Object Detection System",
    description: "An AI-based project on real-time object detection using TensorFlow, leveraging deep learning and computer vision to accurately identify and track objects in images and live video streams.",
    tech: "Python, Flask, React.js, TensorFlow",
    link: "https://github.com/yourgithub/stock-prediction",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <motion.h2 
        className="projects-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="glow">Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech"><strong>Tech Stack:</strong> {project.tech}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
