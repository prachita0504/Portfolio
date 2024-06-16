import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Commented out as per your requirement
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Playsection from './components/Playsection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css'; 
import Calculator from './components/Calculator';
import GoToTop from './components/GoToTop';
import Clock from './components/Clock';

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Calculator/>
      <Technologies />
      <br />
      <Clock/>
      <br />
      <Experience />
      <Playsection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
