// components/Contact/Contact.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion

const ContactUs = ({ text, language, handleSubmit, formStatus }) => {

  const isHebrew = language === 'he';

  return (
    <section id="contact" className={`py-16 bg-white ${isHebrew ? 'rrtl' : ''}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          {text[language].contact}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-center mb-8"
        >
          {/* {text[language].contactInfo} */}
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">{text[language].contactFormat.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">{text[language].contactFormat.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">{text[language].contactFormat.message}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
          >
           {text[language].contactFormat.button}
          </motion.button>
        </motion.form>
        <AnimatePresence>
          {formStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 text-green-600 text-center"
            >
              {text[language].formSubmitted}
            </motion.p>
          )}
            {formStatus === 'formTimeError' && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 text-red-600 text-center"
            >
              {text[language].formTimeError}
            </motion.p>
          )}
          {formStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 text-red-600 text-center"
            >
              {text[language].formError}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactUs;
