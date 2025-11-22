import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Department of Computer Science, Pandit Sambhunath Shukla University, Shahdol. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;