import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer({ darkMode, setDarkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 px-4 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/yetty8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yetbarek-temesgen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
           <a 
             href="mailto:yetbarek.tech@gmail.com"
             className="hover:text-blue-500 transition-colors duration-300"
             aria-label="Email"
           >
             <FaEnvelope size={24} />
           </a>
          </div>
          
          <div className="text-sm mb-4 md:mb-0">
            © {currentYear} Yetbarek Temesgen. All rights reserved.
          </div>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      
      </div>
    </footer>
  );
}