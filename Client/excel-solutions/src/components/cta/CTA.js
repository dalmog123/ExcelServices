// components/CTA/CTA.js
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const CTA = ({ text, language, schedulingLink }) => {
 
  const isHebrew = language === 'he';

  return (
    <section 
      id='cta' 
      className={`py-16 bg-gradient-to-br from-orange-500 to-red-600 text-white text-center ${isHebrew ? 'rtl' : ''}`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          {text[language].ctaTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg mb-8"
        >
          {text[language].ctaText}
        </motion.p>
        <motion.a
          href={schedulingLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-orange-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
        >
          {text[language].scheduleConsultation}
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;
