import React, { useState } from 'react';

const AccessibilityButton = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle('high-contrast', !isHighContrast);
  };

  return (
    <button
      onClick={toggleContrast}
      className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition duration-300 ${isHighContrast ? 'bg-black text-white' : 'bg-white text-black'}`}
      aria-label="Toggle high contrast mode"
      style={{
        zIndex: 1000,
        border: '2px solid orange'
      }}
    >
      {isHighContrast ? 'Normal View' : 'High Contrast'}
    </button>
  );
};

export default AccessibilityButton;
