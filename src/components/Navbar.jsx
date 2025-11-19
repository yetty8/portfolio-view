import React from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
<nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 transition-colors duration-300">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1
      className="text-2xl font-bold cursor-pointer select-none 
                 text-gray-900 dark:text-gray-100"
      onClick={() => setDarkMode(!darkMode)}
    >
      Portfolio
    </h1>

    <ul className="hidden md:flex gap-8 text-lg font-medium 
                   text-gray-800 dark:text-gray-200">
      <li className="hover:text-blue-600 dark:hover:text-blue-400">
        <a href="#home">Home</a>
      </li>
      <li className="hover:text-blue-600 dark:hover:text-blue-400">
        <a href="#about">About</a>
      </li>
      <li className="hover:text-blue-600 dark:hover:text-blue-400">
        <a href="#skills">Skills</a>
      </li>
      <li className="hover:text-blue-600 dark:hover:text-blue-400">
        <a href="#projects">Projects</a>
      </li>
    </ul>
  </div>
</nav>

  );
}
