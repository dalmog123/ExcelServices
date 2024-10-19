import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { Menu, X } from 'lucide-react'; // Assuming you're using these icons from lucide-react

const Header = ({ text, language, handleScroll, toggleLanguage, toggleMenu, isMenuOpen }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-lg md:text-2xl font-bold" // Smaller font size for mobile
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-orange-500">{text[language].headerTitle}</span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {['services', 'benefits', 'team', 'contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={() => handleScroll(`#${item}`)}
                className="text-gray-600 hover:text-orange-500 transition duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                {text[language][item]}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleLanguage}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'HE' : 'EN'}
            </motion.button>
          </nav>
          <motion.button
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
