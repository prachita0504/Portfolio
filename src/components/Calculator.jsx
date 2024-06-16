import React from 'react';
import { motion } from 'framer-motion';
import GoToTop from './GoToTop';
import { useInView } from 'react-intersection-observer'; // Import useInView hook

const Calculator = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.3, // Percentage of section visible
  });

  const handleClick = () => {
    window.location.href = 'https://asdmcalci.netlify.app/';
  };

  return (
    <div
      id="calculator" // Added an id for navigation purposes
      ref={ref}
      className="flex flex-col items-center justify-center h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="bg-white p-8 rounded shadow-md text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Want to calculate something? Just use me!!
        </motion.h1>
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Go to Calcii
        </motion.button>
      </motion.div>
      <GoToTop />
    </div>
  );
};

export default Calculator;
