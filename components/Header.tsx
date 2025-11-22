import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from './icons/Icons';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Innovation', href: '#innovation' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#cta' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Desktop Header */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            // FIX: Replaced w-[90%] with w-full. This is a more robust way to use max-width,
            // ensuring the element's width is capped correctly while preventing potential
            // overflow issues caused by the percentage-based width on some screen sizes.
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg hidden md:block"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="bg-black/50 backdrop-blur-lg border border-gray-700/50 rounded-full py-3 px-6 shadow-2xl">
              {/* FIX: Changed from justify-center with a gap to justify-between.
                  This spaces the links evenly across the nav pill for a more balanced and professional look. */}
              <ul className="flex items-center justify-between text-sm font-medium text-gray-300">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Header */}
      <AnimatePresence>
       {isScrolled && (
        <motion.div 
            className="md:hidden fixed top-4 right-4 z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
        >
          <button
            onClick={() => setIsMenuOpen(true)}
            className="bg-black/50 backdrop-blur-lg border border-gray-700/50 rounded-full p-3 text-white"
            aria-label="Open menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </motion.div>
       )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <XIcon className="h-8 w-8" />
            </button>
            <ul className="flex flex-col items-center gap-y-8">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.indexOf(link) * 0.05 }}
                >
                  <a href={link.href} onClick={closeMenu} className="text-3xl font-bold text-gray-300 hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;