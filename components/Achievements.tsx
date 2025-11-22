import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { imageUrls } from '../data/images';

const achievements = imageUrls.achievements;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Achievements: React.FC = () => {
  return (
    <SectionWrapper id="achievements" className="bg-black">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Achievements at State & National Level</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          Our students compete and win at real hackathons, not just classroom tests.
        </p>
      </div>
      <motion.div
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img src={achievement.img} alt={achievement.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white">{achievement.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Achievements;
