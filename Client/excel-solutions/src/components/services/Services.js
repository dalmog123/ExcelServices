import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const Services = ({ text, language }) => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {text[language].servicesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {text[language].servicesList.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }} // Only hover effect on the service card
              className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300"
            >
              <motion.div
                initial={{ scale: 0 }} // Icon scaling animation
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: 'tween', duration: 0.5 }}
                className="text-orange-500 mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
