import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion, Variants } from 'framer-motion';
import { imageUrls } from '../data/images';

// FIX: Explicitly typed the function's return value as 'Variants'.
// This provides TypeScript the context to correctly infer the type of 'ease: "easeOut"',
// resolving the error where it was being interpreted as a generic 'string' instead of a valid 'Easing' type.
const cardVariant = (fromLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
});

const Innovation: React.FC = () => {
  return (
    <SectionWrapper id="innovation" className="bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Research & Innovation Groups</h2>
        <p className="mt-4 text-lg text-gray-400">Where ideas become reality through collaboration and code.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
          variants={cardVariant(true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={imageUrls.innovation.aiGroup} alt="AI Illustration" className="rounded-lg mb-6 w-full object-cover h-64" />
          <h3 className="text-2xl font-bold text-blue-400">Chaitanya AI Group</h3>
          <p className="mt-4 text-gray-300">A collaborative of teachers and students building practical AI tools. We focus on Computer Vision, NLP, ML, and automation to create real-world solutions.</p>
        </motion.div>
        <motion.div
          className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
          variants={cardVariant(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={imageUrls.innovation.codingClub} alt="Coding Team Illustration" className="rounded-lg mb-6 w-full object-cover h-64" />
          <h3 className="text-2xl font-bold text-blue-400">Coding Club</h3>
          <p className="mt-4 text-gray-300">A student-led group dedicated to building software projects. Guided by faculty and seniors, we foster a strong peer-learning environment to prepare for hackathons, internships, and careers.</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Innovation;
