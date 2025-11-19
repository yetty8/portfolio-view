import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Full-Stack Developer based in Toronto 🇨🇦
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate Full-Stack Developer who enjoys building modern,
              scalable, and user-friendly web applications. I love working with
              React, Node.js, MongoDB, and creating clean UI/UX experiences.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy learning, problem-solving, and turning ideas into real products.
              My goal is to build impactful software that solves real problems.
            </p>
          </motion.div>

          {/* Right Side - What I Do */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 
                       rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">What I Do</h3>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <FaReact className="text-blue-500 dark:text-blue-400 text-xl" /> 
                Build responsive full-stack apps (MERN)
              </li>
              <li className="flex items-center gap-3">
                <FaNodeJs className="text-green-600 dark:text-green-400 text-xl" /> 
                Create fast UI using React + Tailwind
              </li>
              <li className="flex items-center gap-3">
                <FaCode className="text-purple-600 dark:text-purple-400 text-xl" /> 
                Develop REST APIs with Node.js
              </li>
              <li className="flex items-center gap-3">
                <FaDatabase className="text-yellow-600 dark:text-yellow-400 text-xl" /> 
                Database designs with MongoDB & SQL
              </li>
              <li className="flex items-center gap-3">
                🚀 Deploy apps to Netlify, Vercel, Render
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
