// components/ExcelExamples/ExcelExamples.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import Chevron icons

const ExcelExamples = ({ text, language, currentExample, setCurrentExample }) => {
  return (
    <section className="py-16 bg-gray-100">
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
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExample}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{text[language].excelExamples[currentExample].title}</h3>
                <code className="block bg-gray-100 p-4 rounded mb-4 font-mono text-sm">
                  {text[language].excelExamples[currentExample].formula}
                </code>
                <p className="text-gray-600">{text[language].excelExamples[currentExample].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrentExample((prev) => (prev - 1 + text[language].excelExamples.length) % text[language].excelExamples.length)}
              className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-gray-600">
              {currentExample + 1} / {text[language].excelExamples.length}
            </span>
            <button
              onClick={() => setCurrentExample((prev) => (prev + 1) % text[language].excelExamples.length)}
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
