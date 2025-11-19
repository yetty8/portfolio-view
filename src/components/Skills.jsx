import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiGithub, SiExpress } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "REST APIs", icon: <FaCode /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700
                         shadow-md hover:shadow-xl rounded-xl text-center 
                         hover:scale-110 transition-all cursor-pointer"
            >
              <div className="text-5xl mb-3 text-blue-600 dark:text-blue-400 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
