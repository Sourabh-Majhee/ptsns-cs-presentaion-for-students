import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  selectedImg: string | null;
  setSelectedImg: (img: string | null) => void;
}

const Modal: React.FC<ModalProps> = ({ selectedImg, setSelectedImg }) => {
  if (!selectedImg) return null;

  return (
    <AnimatePresence>
      {selectedImg && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImg(null)}
        >
            <motion.img
                src={selectedImg}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                layoutId={`card-${selectedImg}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking image
            />
             <motion.button
                className="absolute top-5 right-5 text-white text-3xl"
                onClick={() => setSelectedImg(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0 }}
            >
                &times;
            </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
