import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import headerImg from '../assets/headerImg.svg';

const Home = () => {
  const [showText, setShowText] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    // Options for the Typed.js instance
    const options = {
      strings: ['PRACHITA SINGH'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    // Initialize Typed instance
    const typed = new Typed(typedRef.current, options);

    // Show text after 1 second
    setTimeout(() => {
      setShowText(true);
    }, 1000);

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex items-center justify-center h-screen px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold text-white animate-fadeInUp"
            ref={typedRef}
          />
          <br />
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-4 animate-fadeInUp">
            A Web Developer
          </h2>
        </div>
        <br />
        <a href="/myresume.pdf" download rel="noopener noreferrer">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl border-2 border-blue-700 bg-gray-800 text-white font-bold py-2 px-4 rounded mt-8 animate-fadeInUp"
          >
            Download Resume
          </motion.button>
        </a>
      </div>

      
    </section>
  );
};

export default Home;
