import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function BlogCards({ BlogData, maxCards = 3 }) {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (BlogData && (Array.isArray(BlogData) || Object.keys(BlogData).length > 0)) {
      const dataArray = Array.isArray(BlogData) ? BlogData : Object.values(BlogData);
      setCards(dataArray);
      setLoading(false);
    }
  }, [BlogData]);

  const skeletonArray = new Array(maxCards).fill(null);

  if (loading) {
    return (
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {skeletonArray.map((_, idx) => (
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
        ))}
      </div>
    );
  }

  return (
    <div className="demanzo-container-auto">
      <div className="p-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="custom-swiper"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx} className="">
              <motion.div
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
                <span className="demanzo-rounded-pill bg-[linear-gradient(to_right,_#ff8c00,_#f12500)]">{card?.category}</span>
                <h3 className="demanzo-h2 mt-2 line-clamp-2">{card.title}</h3>
                <p className="demanzo-bold-p mt-1 line-clamp-2">
                  {card.description || ""}
                </p>
                <a href={card.link} className="demanzo-read-more">
                  Learn more →
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
