import React, { useState } from "react";

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Sample Data
  const categories = [
    {
      id: 1,
      name: "Pants",
      brands: ["Nike", "Adidas", "Zara"],
    },
    {
      id: 2,
      name: "Shirts",
      brands: ["Puma", "H&M", "Levi's"],
    },
    {
      id: 3,
      name: "T-Shirts",
      brands: ["Uniqlo", "Reebok", "Tommy Hilfiger"],
    },
    {
      id: 4,
      name: "Lower",
      brands: ["Under Armour", "Gucci", "Versace"],
    },
  ];

  const toggleAccordion = (id) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  return (
    <div className="h-screen w-72 bg-gray-100 border-r border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 p-4 border-b">Categories</h2>
      <div className="p-2">
        {categories.map((category) => (
          <div key={category.id} className="mb-2">
            <button
              onClick={() => toggleAccordion(category.id)}
              className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              <span>{category.name}</span>
              <span>{activeCategory === category.id ? "-" : "+"}</span>
            </button>
            {activeCategory === category.id && (
              <div className="mt-2 pl-6">
                {category.brands.map((brand, index) => (
                  <div
                    key={index}
                    className="px-2 py-1 text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
