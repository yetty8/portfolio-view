import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
    title: "AI Task Manager",
    description: "An AI-powered task management application with smart organization, productivity features, and AI-assisted task prioritization.",
    img: "/task.jpg",
    github: "https://github.com/yetty8/AI-TASK-MANAGER",
    live: "https://ai-task-manager-2.vercel.app/"
  },

  {
    title: "IT Help-Desk",
    description: "IT Help-Desk is a web application that allows users to submit tickets for support and track their status.",
    img: "/IT-helpdesk.jpg",
    github: "https://github.com/yetty8/IT-Help-Desk",
    live: "https://it-help-desk-mauve.vercel.app/"
  },

  {
    title: "Weather App",
    description: "A weather application built with Django, featuring real-time data, responsive UI, and location-based forecasts.",
    img: "/weather.jpg",
    github: "https://github.com/yetty8/Django-Weather-App-1/tree/main/weather",
    live: "https://web-production-fd1a3.up.railway.app/"
  },
  
  {
    title: "Hotel Website",
    description: "A modern hotel booking UI with animations, responsive design, and seamless user experience.",
    img: "/Hotel.jpg",
    github: "https://github.com/yetty8/Hotel",
    live: "https://hotel-one-nu.vercel.app/"
  },
    {
    title: "E-Commerce Store",
    description: "An online store built with React, Redux, and Stripe integration for payments.",
    img: "/website.jpg",
    github: "https://github.com/yetty8/ecommerce-store/actions/runs/19597540592",
    live: "https://69221707b5b5cd5aff129eb4--unique-nasturtium-f0022f.netlify.app/"
  },
   {
    title: "Nature Notes",
    description: "Angular app that cycles nature videos with one-click scene switching.",
    img: "/nature1.jpg",
    github: "https://github.com/yetty8/Angular",
    live: "https://angular-production-7992.up.railway.app/"
  },
  {
    title: "Travel Blog",
    description: "React + Tailwind blog site with dynamic categories and routing.",
    img: "/travel.jpg",
    github: "https://github.com/yetty8/MyBlog",
    live: "https://my-blog-ochre-rho.vercel.app/"
  },
 
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                       hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
          >
            {/* Image with overlay */}
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="h-52 md:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
                {p.description}
              </p>

              {/* Links */}
             <div className="flex gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600
               text-gray-900 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg
               transition transform hover:scale-105 hover:from-gray-400 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300
               text-white dark:text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-lg
               transition transform hover:scale-105 hover:from-blue-500 hover:to-blue-400 dark:hover:from-blue-300 dark:hover:to-blue-200"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
