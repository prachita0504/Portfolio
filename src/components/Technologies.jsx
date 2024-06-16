import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import GoToTop from "./GoToTop";

const Technologies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.3, // Percentage of section visible
  });

  return (
    <div
      id="technologies" // Added an id for navigation purposes
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-10 text-center text-3xl sm:text-5xl text-white font-bold mb-8"
        >
          TECHNOLOGIES
        </motion.h1>
        <br />
        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaReact className="text-blue-500" size={60} sm:size={90} />
            <span className="text-white mt-2 text-lg sm:text-xl">React</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaNodeJs className="text-green-500" size={60} sm:size={90} />
            <span className="text-white mt-2 text-lg sm:text-xl">Node.js</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaCss3Alt className="text-blue-600 " size={60} sm:size={90} />
            <span className="text-white mt-2 text-lg sm:text-xl">CSS3</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaHtml5 className="text-orange-600" size={60} sm:size={90} />
            <span className="text-white mt-2 text-lg sm:text-xl">HTML5</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaJs className="text-yellow-500" size={60} sm:size={90} />
            <span className="text-white mt-2 text-lg sm:text-xl">JavaScript</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaGitAlt className="text-red-500" size={60} sm:size={90} />
            <span className="text-white mt-2 text-lg sm:text-xl">Git</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaJava className="text-purple-600" size={60} sm:size={90} />
            <span className="text-white mt-2 text-lg sm:text-xl">Java</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaPython className="text-yellow-300" size={60} sm:size={90} />
            <span className="text-white mt-2 text-lg sm:text-xl">Python</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaDatabase className="text-green-400" size={60} sm:size={90} />
            <span className="text-white mt-2 text-lg sm:text-xl">MongoDB</span>
          </motion.div>
        </motion.div>
      </motion.div>
      <GoToTop />
    </div>
  );
};

export default Technologies;
