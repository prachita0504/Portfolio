import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import GoToTop from './GoToTop';

const Footer = () => {
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = ['Thank you', 'Merci', 'Gracias', 'Danke', 'Grazie', 'Teşekkür ederim', '고마워', 'Cảm ơn bạn']; // Thank you in different languages

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 text-center md:text-left">
          <p>&copy; 2024 PRACHITA SINGH❤. All rights reserved.</p>
          <nav className="mt-2">
            <ul className="flex space-x-4">
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mb-4 text-center md:text-left">
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/prachita0504" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/prachita05/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
          <p className="mt-2">Email📩: prachitasingh05@gmail.com</p>
        </div>
        <div className="bg-black text-2xl text-white p-3">
          <p>{languages[languageIndex]}</p>
        </div>
      </div>
      
      <GoToTop />
    </footer>
  );
};

export default Footer;
