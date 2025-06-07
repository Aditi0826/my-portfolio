import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  "AI/ML", "JavaScript", "C", "C++", "Python",
  "React", "HTML5", "CSS3", "Bootstrap", "Node.js", "PHP",
  "MongoDB", "SQL",
];

const tools = [
  {
    title: "Development Tools",
    items: ["VS Code", "Git & GitHub", "Jupyter", "Matlab", "Scilab"]
  },
  {
    title: "Productivity",
    items: ["Canva", "Google Workspace", "Microsoft Office"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="glow">Skills</span>
      </motion.h2>

      {/* Programming & Web Skills */}
      <motion.div
        className="skills-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {/* Tools Section */}
      <div className="tool-groups">
        {tools.map((group, idx) => (
          <motion.div
            key={idx}
            className="tool-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="tool-title">{group.title}</h3>
            <div className="tool-items">
              {group.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="tool-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
