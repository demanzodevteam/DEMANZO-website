import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOURCE_BASE_URL } from "../../config/urls";

const categories = ["Show All", "Business", "Educational", "Matrimony", "eCommerce"];

// Replace with your real data
const projects = [
  { id: 1, category: "Business", image: SOURCE_BASE_URL +"wp-content/uploads/2024/11/Tadashie.png" },
  { id: 2, category: "Business", image: SOURCE_BASE_URL +"wp-content/uploads/2024/11/dance.png" },
  { id: 3, category: "Business", image: SOURCE_BASE_URL +"wp-content/uploads/2023/07/26.jpg" },
  { id: 4, category: "Business", image: SOURCE_BASE_URL +"wp-content/uploads/2023/07/lakme-chennai.jpg" },
  { id: 5, category: "Business", image: SOURCE_BASE_URL +"wp-content/uploads/2023/07/anit.jpg" },
  { id: 6, category: "Business", image: SOURCE_BASE_URL +"wp-content/uploads/2024/11/dmi.jpg" },
  { id: 7, category: "Business", image: SOURCE_BASE_URL +"wp-content/uploads/2023/07/spacey.jpg" },
  { id: 8, category: "Business", image: SOURCE_BASE_URL +"wp-content/uploads/2023/07/Gain.jpg" },
  { id: 9, category: "Business", image: SOURCE_BASE_URL +"wp-content/uploads/2023/07/archi.jpg" },
  { id: 10, category: "Educational", image: SOURCE_BASE_URL +"wp-content/uploads/2024/11/spoton.jpg" },
  { id: 11, category: "Educational", image: SOURCE_BASE_URL +"wp-content/uploads/2023/07/lakme-chennai.jpg" },
  { id: 12, category: "Matrimony", image: SOURCE_BASE_URL +"wp-content/uploads/2023/07/matrimony.jpg" },
  { id: 13, category: "eCommerce", image: SOURCE_BASE_URL +"wp-content/uploads/2024/11/Sharon-Furniture.png" },
  { id: 14, category: "eCommerce", image: SOURCE_BASE_URL +"wp-content/uploads/2024/11/centram.jpg" },
  { id: 15, category: "eCommerce", image: SOURCE_BASE_URL +"wp-content/uploads/2023/07/Cholas.jpg" },
];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Show All");

  const filteredProjects =
    selectedCategory === "Show All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              selectedCategory === cat
                ? "bg-[linear-gradient(to_right,_#ff8c00,_#f12500)] text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
            >
              <img
                src={project.image}
                alt={project.category}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
