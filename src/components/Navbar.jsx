import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">

        <motion.div
          className="text-white text-5xl font-bold hover:text-yellow-500 transition duration-300 flex items-center"
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <motion.div
            className="text-white text-4xl font-bold"
            whileHover={{ scale: 1.1 }}
          >
            Prachii
          </motion.div>
        </motion.div>


        <ul className="flex space-x-8 sm:space-x-16 text-3xl text-white animate-fadeInUp">
          <li className="flex space-x-16">
            <a
              href="https://www.linkedin.com/in/prachita05/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-5xl transition duration-300 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/prachita0504" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-5xl transition duration-300 hover:text-gray-400"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
