import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { imageUrls } from '../data/images';

const SIH: React.FC = () => {
  return (
    <SectionWrapper id="sih" className="bg-black">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Smart India Hackathon 2025</h2>
          <p className="mt-4 text-lg text-gray-400">
            Our students are stepping into national-level tech platforms.
          </p>
          <div className="mt-8 space-y-4">
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500/50 pulse-border-green">
              <h3 className="text-xl font-semibold text-green-400">TigerBytes – Shortlisted</h3>
              <p className="text-gray-400 mt-1">Recognized for their innovative approach to problem-solving.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-500/50 pulse-border-yellow">
              <h3 className="text-xl font-semibold text-yellow-400">The GoldenBirdz – Waitlisted</h3>
              <p className="text-gray-400 mt-1">A promising team with a strong project concept.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <img src={imageUrls.sih} alt="SIH Graphic" className="rounded-xl object-cover" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SIH;
