// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

import "../../../styles.css";

export default function Caurosel({ category }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    setHasMounted(true); // only render client-side
  }, []);

  if (!hasMounted) return null;
  return (
    <>
      <h2 className="text-[30px] lg:text-[40px] font-[600] text-[#191d27] text-center pb-6" data-aos="fade-up" data-aos-duration="2000" >
        {category.name}
      </h2>
      <div className="demanzo-container">
        <div
          className="demanzo-container-auto px-4 sm:px-6 md:px-8 overflow-visible relative z-10 pb-10"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Swiper
            loop={true}
            loopAdditionalSlides={1} // Helps Swiper loop even if # of slides = view
            slidesPerView={2.9}       //  Slightly less than 3
            spaceBetween={32}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}

            modules={[Autoplay]}
          >

            {[...category.posts, ...category.posts].map((testimonial, index) => (
              <SwiperSlide
                key={`${testimonial.title}-${index}`}
                className="bg-white rounded-xl shadow-xl overflow-visible my-4" 
                style={{
                  boxShadow: "0 8px 8px rgba(0, 0, 0, 0.08)", 
                  background: "#fff",
                  borderRadius: "12px",
                  minHeight:"320px",
                }}
              >
                <div className="p-8 bg-white rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_10px_10px_rgba(0,0,0,0.08)]">
                  <p className="text-[16px] font-[500] text-[#616670] min-h-[180px]">
                    {testimonial.content}
                  </p>
                  <div className="flex justify-center items-center mx-auto w-fit bg-[#fef9d9] py-1 my-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#ffd400]"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
                     L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[20px] font-[600] text-center text-[#30353b]">
                    {testimonial.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </>
  );
}
