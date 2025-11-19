import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const words = ["Full-Stack Web Developer", "React & Node.js Enthusiast", "Problem Solver"];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setInterval(() => {
      if (charIndex < words[wordIndex].length) {
        setCurrentWord((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentWord("");
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [charIndex, wordIndex]);

  return (
    <section
      id="home"
      className="relative mt-24 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center
                 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800
                 text-gray-900 dark:text-gray-100 transition-colors rounded-xl shadow-lg overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="w-24 h-24 bg-blue-200 dark:bg-blue-700 rounded-full absolute -top-12 -left-12 opacity-50"
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="w-16 h-16 bg-pink-300 dark:bg-pink-600 rounded-full absolute -bottom-8 -right-8 opacity-40"
          animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hello, I'm <span className="text-blue-600 dark:text-blue-400">Yetbarek Temesgen</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-md h-8">
          {currentWord}
          <span className="border-r-2 border-gray-700 dark:border-gray-300 ml-1 animate-pulse"></span>
        </p>

        <div className="flex gap-5 text-3xl text-gray-700 dark:text-gray-300">
          <a
            href="https://www.linkedin.com/in/yetbarek-temesgen-b195526a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-400 text-gray-700 dark:text-gray-100 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yetty8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-black dark:hover:bg-gray-100 text-gray-700 dark:text-gray-100 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-400 dark:hover:bg-blue-300 text-gray-700 dark:text-gray-100 transition transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-400 text-gray-700 dark:text-gray-100 transition transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-pink-600 dark:hover:bg-pink-500 text-gray-700 dark:text-gray-100 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center relative z-10"
      >
        <img
          src="/prince.png"
          alt="Yetbarek Temesgen"
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-gray-200 dark:border-gray-700"
        />
      </motion.div>
    </section>
  );
}
