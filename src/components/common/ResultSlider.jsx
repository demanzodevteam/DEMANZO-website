import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MEDIA_URL } from "../../config/urls";

const ResultSlider = ({ pageData }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const images = pageData?.images || [];

  return (
    <section className="bg-white demanzo-section">
      <div className="demanzo-container-auto  px-4 md:px-8 lg:px-20 ">
        <div className="mb-6 inline-flex items-center gap-2 bg-[#f1f5ff] text-[#0a58ca] px-4 py-1 rounded-full text-sm font-medium">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
          </svg>
          {pageData.title}
        </div>

        {images.length > 0 ? (
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex justify-center">
                  <div
                    className="w-full md:w-[400px] lg:w-[500px] h-[300px] cursor-pointer"
                    onClick={() => {
                      setInitialSlide(index);
                      setShowPreview(true);
                    }}
                  >
                    <img
                      src={MEDIA_URL + img?.src}
                      alt={img?.alt || `SEO result ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="demanzo-bold-p text-center">No results to show.</p>
        )}
      </div>

      {/* Full-screen Image Preview Modal with Swiper */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-2">
          {/* Close Button */}
          <button
          aria-label="show preview"
            className="absolute top-4 right-4 text-white text-3xl md:text-4xl font-bold z-50 hover:cursor-pointer"
            onClick={() => setShowPreview(false)}
          >
            &times;
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            initialSlide={initialSlide}
            loop={true}
            className="w-full max-w-[90vw] md:max-w-3xl lg:max-w-4xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex items-center justify-center">
                  <div className="max-w-full max-h-[70vh]">
                    <img
                      src={MEDIA_URL + img?.src}
                      alt={img?.alt || `Slide ${index + 1}`}
                      className="w-full h-auto object-contain rounded-md shadow-md"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Custom Swiper Pagination Styling */}
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #f97316 !important;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background-color: #f97316 !important;
            opacity: 1;
          }
          .swiper-button-next, .swiper-button-prev {
            color: white;
          }
        `}
      </style>
    </section>
  );
};

export default ResultSlider;
