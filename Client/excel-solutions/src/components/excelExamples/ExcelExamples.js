import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import Chevron icons

// Variants for motion.div to handle direction-based animation
const variants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100, // Slide in from left or right
  }),
  center: {
    opacity: 1,
    x: 0, // Center position
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100, // Slide out to left or right
  }),
};

const ExcelExamples = ({ text, language, currentExample, setCurrentExample }) => {
  const [direction, setDirection] = useState(1); // State to track the animation direction
  const isHebrew = language === 'he';

  const handleNext = () => {
    setDirection(1); // Moving right
    setCurrentExample((prev) => (prev + 1) % text[language].excelExamples.length);
  };

  const handlePrev = () => {
    setDirection(-1); // Moving left
    setCurrentExample((prev) => (prev - 1 + text[language].excelExamples.length) % text[language].excelExamples.length);
  };

  return (
    <section className={`py-16 bg-gray-100 ${isHebrew ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {text[language].excelExamplesTitle}
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentExample}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{text[language].excelExamples[currentExample].title}</h3>
                <code className="block bg-gray-100 p-4 rounded mb-4 font-mono text-sm ltr">
                  {text[language].excelExamples[currentExample].formula}
                </code>
                <p className="text-gray-600">{text[language].excelExamples[currentExample].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between items-center mt-6 ltr">
            <button
              onClick={handlePrev}
              className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-gray-600">
              {currentExample + 1} / {text[language].excelExamples.length}
            </span>
            <button
              onClick={handleNext}
              className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcelExamples;
