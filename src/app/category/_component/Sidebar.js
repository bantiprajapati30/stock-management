// components/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:w-1/4 w-full bg-gray-800 text-white h-auto md:h-screen">
      {/* Mobile Toggle Button */}
      <button
        className="block md:hidden bg-blue-600 w-full p-3 text-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Categories' : 'Open Categories'}
      </button>

      {/* Sidebar List */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block p-4 transition-all duration-300`}
      >
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories && categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-2 rounded ${
                selectedCategory === category
                  ? 'bg-blue-500'
                  : 'hover:bg-blue-700'
              }`}
              onClick={() => {
                onSelectCategory(category);
                setIsOpen(false); // Close sidebar on mobile when category is selected
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
