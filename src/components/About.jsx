import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myphoto.jpg'; 
import GoToTop from './GoToTop';
import { useInView } from 'react-intersection-observer'; // Import useInView hook

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.3, // Percentage of section visible
  });

  return (
    <section
      id="about" // Added an id for navigation purposes
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen p-8"
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
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl font-bold text-white mb-8 text-center"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center md:flex-row md:items-center"
        >
          <motion.img
            src={myPhoto}
            alt="Prachita Singh"
            className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-8 shadow-lg"
            whileHover={{ scale: 1.1 }} // Added hover effect to scale the image
          />
          <motion.p
            className="text-2xl font-bold text-white max-w-prose text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            A second-year Mechanical Engineering student with a keen interest in web development, actively
            seeking an internship opportunity to deepen technical expertise. Eager to contribute my skills
            in web development to a dynamic team, where I can learn and collaborate on innovative projects.
            Committed to bringing a high level of enthusiasm, adaptability, and a strong work ethic to a
            professional web development environment.
          </motion.p>
        </motion.div>
      </motion.div>
      <GoToTop />
    </section>
  );
};

export default About;
