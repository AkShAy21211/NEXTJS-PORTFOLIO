import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button 
      className="mt-4 px-4 py-3 text-sm text-nowrap md:text-lg border-2 border-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
