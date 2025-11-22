import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      <ParticleBackground />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="relative z-20 px-4">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Computer Science Department
          <span className="block text-blue-400 mt-2 md:mt-4">Where Innovation Happens</span>
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pandit Sambhunath Shukla University, Shahdol
        </motion.p>
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#achievements" className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black">
            Explore Achievements
          </a>
          <a href="#innovation" className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black">
            Student Research & Clubs
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;