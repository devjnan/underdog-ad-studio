
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  
  const categories = [
    "All Projects", "Digital Experience", "Brand Campaign", "Product Launch", 
    "Social Campaign", "E-commerce", "Mobile App", "Interactive"
  ];

  return (
    <section className="bg-white py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              className={activeCategory === category 
                ? "bg-orange-500 text-white hover:bg-orange-600 transform scale-105 shadow-md" 
                : "text-gray-600 hover:text-orange-500 hover:bg-orange-50 hover:scale-105 transition-all duration-200"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
