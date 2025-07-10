import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RecentBlogs({ BlogData }) {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (BlogData && (Array.isArray(BlogData) || Object.keys(BlogData).length > 0)) {
      const dataArray = Array.isArray(BlogData) ? BlogData : Object.values(BlogData);
      setCards(dataArray.slice(0, 3)); // Only show the first 3 cards
      setLoading(false);
    }
  }, [BlogData]);

  const skeletonArray = new Array(3).fill(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {loading
        ? skeletonArray.map((_, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-5 animate-pulse"
            >
              <div className="h-48 bg-gray-200 rounded-lg mb-4" />
              <div className="h-4 w-20 bg-gray-300 rounded mb-2" />
              <div className="h-5 w-full bg-gray-300 rounded mb-2" />
              <div className="h-4 w-3/4 bg-gray-300 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded mt-4" />
            </div>
          ))
        : cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.02 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition overflow-hidden"
            >
              <motion.img
                src={card?.image}
                alt={card?.alt || ""}
                className="rounded-lg mb-4 w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <span className="inline-block text-xs font-semibold text-white uppercase px-3 py-1 rounded-full bg-[linear-gradient(to_right,_#ff8c00,_#f12500)]">
                {card?.category}
              </span>
              <h3 className="text-lg font-semibold mt-2 text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {card.description || ""}
              </p>
              <a
                href={card.link}
                className="mt-4 inline-block text-blue-500 font-medium hover:underline text-sm"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
    </div>
  );
}
