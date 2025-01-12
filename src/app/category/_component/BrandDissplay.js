// components/BrandDisplay.jsx
import React from 'react';

const BrandDisplay = ({ brands }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {brands && brands.map((brand) => (
        <div
          key={brand}
          className="bg-white text-center shadow-lg rounded-lg p-4 hover:scale-105 transform transition-all"
        >
          <h3 className="text-lg md:text-2xl font-bold">{brand}</h3>
        </div>
      ))}
    </div>
  );
};

export default BrandDisplay;
