import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Cases from './components/Cases';
import Contact from './components/Contact';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-[#0a0a0a] text-white min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Cases />
        <Contact />
      </div>
    </AnimatePresence>
  );
}

export default App;