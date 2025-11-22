import React from 'react';
import SectionWrapper from './SectionWrapper';
import { imageUrls } from '../data/images';

const Mentorship: React.FC = () => {
  return (
    <SectionWrapper id="mentorship" className="bg-gray-900">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Faculty Mentorship</h2>
          <p className="mt-6 text-lg text-gray-300">
            Teachers actively guide students in projects, research, competitions, and idea development. They encourage experimentation, critical thinking, and a professional problem-solving mindset. Our faculty are more than educators; they are partners in our students' growth.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img 
            src={imageUrls.mentorship} 
            alt="Faculty mentoring students"
            className="rounded-xl shadow-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Mentorship;
