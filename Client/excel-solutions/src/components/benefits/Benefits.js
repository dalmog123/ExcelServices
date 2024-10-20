import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const Benefits = ({ text, language }) => {
  const isHebrew = language === 'he';

  return (
    <section id="benefits" className={`py-16 bg-white ${isHebrew ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {text[language].benefitsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {text[language].benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }} // Only hover effect
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
