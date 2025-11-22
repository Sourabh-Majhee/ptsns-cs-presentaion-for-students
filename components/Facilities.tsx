import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { ComputerIcon, CodeIcon, UsersIcon } from './icons/Icons';

const facilitiesData = [
  {
    icon: <ComputerIcon className="h-10 w-10 text-blue-400" />,
    title: 'Lab Infrastructure',
    description: ['68+ high-performance systems', 'Fast network', 'Dedicated practical and project sessions'],
  },
  {
    icon: <CodeIcon className="h-10 w-10 text-blue-400" />,
    title: 'Project-Driven Learning',
    description: ['Real software and AI projects', 'Hands-on development culture', 'Focus on practical skills'],
  },
  {
    icon: <UsersIcon className="h-10 w-10 text-blue-400" />,
    title: 'Mentorship & Guidance',
    description: ['Supportive faculty', 'Guidance for projects & research', 'Competition preparation'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Facilities: React.FC = () => {
  return (
    <SectionWrapper id="facilities" className="bg-gray-900">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Facilities</h2>
        <p className="mt-4 text-lg text-gray-400">The tools and environment to build the future.</p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {facilitiesData.map((facility, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-900 mb-6">
              {facility.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{facility.title}</h3>
            <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
              {facility.description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Facilities;