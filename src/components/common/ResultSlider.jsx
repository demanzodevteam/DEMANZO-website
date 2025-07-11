import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ResultSlider = () => {
  const images = [
    "https://demanzo.com/wp-content/uploads/2023/07/Digital-Marketing-Case-Study-and-Portfolio-Demanzo4.png",
    "https://demanzo.com/wp-content/uploads/2023/07/Digital-Marketing-Case-Study-and-Portfolio-Demanzo4.png",
    "https://demanzo.com/wp-content/uploads/2023/07/Digital-Marketing-Case-Study-and-Portfolio-Demanzo4.png",
    "https://demanzo.com/wp-content/uploads/2023/07/Digital-Marketing-Case-Study-and-Portfolio-Demanzo4.png",
  ];

  return (
    <section className="py-10 px-4 md:px-8 lg:px-20 bg-white">
      <div className="mb-6 inline-flex items-center gap-2 bg-[#f1f5ff] text-[#0a58ca] px-4 py-1 rounded-full text-sm font-medium">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
        </svg>
        SEO Results
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex justify-center">
              <img
                src={imgSrc}
                alt={`SEO result ${index + 1}`}
                className="w-full max-w-4xl object-contain rounded-lg shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ResultSlider;
