// components/MobileMenu/MobileMenu.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion

const MobileMenu = ({ isMenuOpen, handleScroll, toggleMenu, text, language, toggleLanguage }) => {
  const isHebrew = language === 'he';
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur-md ${isHebrew ? 'rrtl' : ''}`}
        >
          <div className="container mx-auto px-4 py-20">
            <ul className="space-y-6">
              {['services', 'benefits', 'team', 'contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <a
                    href={`#${item}`}
                    onClick={() => { handleScroll(`#${item}`); toggleMenu(); }}
                    className="block text-2xl font-semibold text-gray-800 hover:text-orange-500 transition duration-300"
                  >
                    {text[language][item]}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() => { toggleLanguage(); toggleMenu(); }}
                  className={`block w-full text-left text-2xl font-semibold text-gray-800 hover:text-orange-500 transition duration-300 ${isHebrew ? 'rrtl' : ''}`}
                >
                  {language === 'he' ? 'Switch to English' : 'עבור לעברית'}
                </button>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
