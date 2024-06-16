import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactImg from '../assets/ContactImg.svg'; 
import GoToTop from './GoToTop';

const ContactUs = () => {
  const form = useRef();
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ajvxb4y', 'template_5mphw4l', form.current, {
        publicKey: 'vMjHVOBoXTFiHVxDj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message, please try again later.');
        },
      );
  };

  return (
    <div
      id="contact" // Added an id for navigation purposes
      ref={ref}
      className="flex items-center justify-center min-h-screen p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="p-8 rounded shadow-md w-full max-w-md"
      >
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          GET IN TOUCH
        </motion.h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            aria-label="Send"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
          >
            Send
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="flex justify-center mt-4"
        whileHover={{ scale: 1.1, rotate: [0, 4, -4, 0] }}
        // whileTap={{ scale: 0.9 }}
      >
        <motion.img
          src={ContactImg}
          alt="Contact Us"
          className=" rounded-lg"
        />
      </motion.div>

      <GoToTop />
    </div>
  );
};

export default ContactUs;
