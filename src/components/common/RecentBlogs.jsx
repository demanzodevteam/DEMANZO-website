import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogCards({ BlogData }) {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // If BlogData exists and is an array or object with values, update state
    if (BlogData && (Array.isArray(BlogData) || Object.keys(BlogData).length > 0)) {
      const dataArray = Array.isArray(BlogData) ? BlogData : Object.values(BlogData);
      setCards(dataArray);
      setLoading(false);
    }
  }, [BlogData]);

  const skeletonArray = new Array(3).fill(null);

  return (
    <div className="demanzo-container-auto">
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
        : (
          <>
          <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className=""
        >
            {

              cards.map((card, idx) => (
                <SwiperSlide key={idx} className="custom-swiper-slide !h-[36vh]">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.02 }} // <- This is the stagger
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
                    <h2 className="demanzo-h3 line-clamp-2">{card.title}</h2>
                    <p className="demanzo-p">{card.description || ""}</p>
                    <a href={card.link} className="demanzo-read-more">
                      Learn more →
                    </a>
                  </motion.div>
                </SwiperSlide>
              ))

            }
            </Swiper>
          </>
        )}
    </div>
  );
}
