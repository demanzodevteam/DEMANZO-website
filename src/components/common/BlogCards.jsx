import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Simulate a fetch
const fetchCards = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          category: "SEO",
          title: "Ultimate Guide To Core Web Vitals – Google’s 2021 Update",
          description:
            "Core Web Vitals are expected to become a major ranking factor for search engines.",
          image: "https://demanzo.com/wp-content/uploads/2025/06/b2b-saas-demand-generation-strategy-team-discussion-1.webp",
          link: "#",
        },
        {
          category: "eCommerce Development, Website Development",
          title:
            "Centaram Books Launches A New Digital Tamil Bookstore For Avid Readers",
          description: "Centaram Books is a leading books store in Nagercoil.",
          image: "https://demanzo.com/wp-content/uploads/2025/06/b2b-saas-demand-generation-strategy-team-discussion-1.webp",
          link: "#",
        },
        {
          category: "SEO",
          title:
            "Your Ultimate Guide For Keyword Research For Better Keyword Ranking",
          description:
            "If you want to gain more organic search traffic to your website, then SEO is key.",
          image: "https://demanzo.com/wp-content/uploads/2025/06/b2b-saas-demand-generation-strategy-team-discussion-1.webp",
          link: "#",
        },
      ]);
    }, 2000); // simulate 2s loading
  });

export default function BlogCards({BlogData}) {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
const dataArray = Array.isArray(BlogData) ? BlogData : Object.values(BlogData);
  useEffect(() => {
    console.log(BlogData)
    fetchCards().then((data) => {
      setCards(data);
      setLoading(false);
    });
  }, []);

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
        : dataArray.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition"
          >
            <img
              src={card?.image}
              // alt={card.images[0]?.alt}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <span className="text-xs font-semibold text-blue-600 uppercase">
              {card.category}
            </span>
            <h3 className="text-lg font-semibold mt-2 text-gray-800">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{card.description}</p>
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
