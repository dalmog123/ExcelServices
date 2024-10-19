import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon from react-icons

const WhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/972545999731'; // Replace with your WhatsApp link

  const handleWhatsAppClick = () => {
    window.location.href = whatsappLink;
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition duration-300 bg-green-500 text-white"
      aria-label="Contact us on WhatsApp"
      style={{
        zIndex: 1000,
      }}
    >
      <FaWhatsapp size={24} /> {/* WhatsApp icon from react-icons */}
    </button>
  );
};

export default WhatsAppButton;