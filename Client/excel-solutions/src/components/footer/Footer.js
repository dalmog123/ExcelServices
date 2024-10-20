// components/Footer/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Excel Solutions. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          {/* <a href="#" className="hover:text-orange-500 transition duration-300">Privacy Policy</a> */}
          {/* <a href="#" className="hover:text-orange-500 transition duration-300">Terms of Service</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
