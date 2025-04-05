import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";

const experienceData = [
  {
    id: 1,
    company: "Centre for Development of Telematics (C-DOT)",
    role: "Web Development Intern",
    duration: "Jul 2024 – Aug 2024",
    description: [
      "Developed a Library Management System using HTML, CSS, PHP, Bootstrap, and SQL.",
      "Designed a user-friendly interface for book records, user access, and transactions.",
      "Optimized database queries for efficient book retrieval and user authentication.",
    ],
  },
  {
    id: 2,
    company: "Edunet Foundation",
    role: "Full Stack Web Development Intern",
    duration: "Feb 2025 – Present",
    description: [
      "Developing and maintaining full-stack applications using React, Node.js, and MongoDB.",
      "Building responsive and interactive web solutions for educational platforms.",
      "Collaborating in an agile team to implement UI enhancements and backend APIs.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <motion.h2 
        className="experience-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="glow">Experience</span>
      </motion.h2>

      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            className="experience-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-content">
              <h3 className="company">{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <span className="duration">{exp.duration}</span>
              <ul className="description">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
