import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaUniversity, FaBriefcase } from 'react-icons/fa';
import GoToTop from './GoToTop';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.3, // Percentage of section visible
  });

  return (
    <div
      id="experience" // Added an id for navigation purposes
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-10 "
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
          className="my-10 text-center text-3xl sm:text-5xl text-white font-bold"
        >
          MY EDUCATION
        </motion.h1>
        <div className="space-y-10">
          <motion.div
            className="flex flex-col sm:flex-row items-center text-white p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <FaSchool size={60} className="text-red-600 mb-4 sm:mb-0" />
            <div className="sm:ml-6 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold">Vanasthali Public School</h2>
              <p className="text-lg">CBSE 1-12</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center text-white p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <FaUniversity size={60} className="text-yellow-300 mb-4 sm:mb-0" />
            <div className="sm:ml-6 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold">Delhi Skill and Entrepreneurship University</h2>
              <p className="text-lg">(2022-26)</p>
              <p className="text-lg">Btech (MECHANICAL ENGINEERING)</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center text-white p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <FaBriefcase size={60} className="text-blue-600 mb-4 sm:mb-0" />
            <div className="sm:ml-6 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold">EUPHEUS LEARNING</h2>
              <p className="text-lg">Web Development Internship</p>
              <p>(May 2024 - June 2024)</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <GoToTop />
    </div>
  );
};

export default Experience;
