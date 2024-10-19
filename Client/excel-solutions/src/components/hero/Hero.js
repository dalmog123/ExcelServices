// components/Hero/Hero.js
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const Hero = ({ text, language, opacity, scale }) => {
  return (
    <motion.section
      className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-32 mt-16"
      style={{ opacity, scale }}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
        >
          {text[language].heroTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-center"
        >
          {text[language].heroSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="bg-white text-orange-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
          >
            {text[language].freeConsultation}
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
