import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { imageUrls } from '../data/images';

const images = imageUrls.gallery;

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <SectionWrapper id="gallery" className="bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Student Life & Events</h2>
        <p className="mt-4 text-lg text-gray-400">Moments of collaboration, competition, and learning.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImg(src)}
            whileHover={{ scale: 1.03 }}
            layoutId={`card-${src}`}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
      
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />

    </SectionWrapper>
  );
};

export default Gallery;
