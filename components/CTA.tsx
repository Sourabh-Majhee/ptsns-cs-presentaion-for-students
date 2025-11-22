import React from 'react';
import SectionWrapper from './SectionWrapper';

const CTA: React.FC = () => {
  return (
    <SectionWrapper id="cta" className="bg-black">
      <div className="text-center bg-gradient-to-r from-blue-600/30 to-purple-600/30 py-16 md:py-20 px-4 sm:px-8 rounded-2xl animated-gradient">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Welcome to the Computer Science Department
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Here, students don't just learn—they build, innovate, and grow into the next generation of tech leaders.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
            View Projects
          </a>
          <a href="#" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
            Join Our Clubs
          </a>
          <a href="#" className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-gray-500 hover:bg-gray-800/50 transition-colors">
            Contact Department
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;