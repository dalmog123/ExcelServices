// components/Team/Team.js
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { Linkedin } from 'lucide-react'; // Assuming you're using lucide-react for icons
import { FaWhatsapp } from 'react-icons/fa';

const Team = ({ text, language }) => {
  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {text[language].team}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {text[language].teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs mx-auto" // Centered and added max width
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-65 object-cover object-center" // Adjusted height for better aspect ratio
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={member.whatsApp}
                    className="text-gray-400 hover:text-orange-500 transition duration-300"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
