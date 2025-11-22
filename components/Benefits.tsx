
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { BriefcaseIcon, CodeIcon, BrainIcon, UsersIcon, GrowthIcon } from './icons/Icons';

const benefitsData = [
  {
    icon: <BriefcaseIcon className="h-8 w-8 text-blue-400" />,
    title: 'Strong Project Portfolio',
    description: 'Build real-world projects that impress employers.',
  },
  {
    icon: <UsersIcon className="h-8 w-8 text-blue-400" />,
    title: 'Hackathon Experience',
    description: 'Learn teamwork, problem-solving, and resilience under pressure.',
  },
  {
    icon: <BrainIcon className="h-8 w-8 text-blue-400" />,
    title: 'Modern Tech Exposure',
    description: 'Gain hands-on skills in AI, ML, Web, and App Development.',
  },
  {
    icon: <GrowthIcon className="h-8 w-8 text-blue-400" />,
    title: 'Career Opportunities',
    description: 'Higher chances of securing internships and top placements.',
  },
];

const Benefits: React.FC = () => {
  return (
    <SectionWrapper id="benefits" className="bg-gray-900">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Students Benefit</h2>
        <p className="mt-4 text-lg text-gray-400">We deliver tangible value and career advantages.</p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-transparent hover:border-blue-500 transition-colors">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-900 mx-auto mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
            <p className="mt-2 text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Benefits;
