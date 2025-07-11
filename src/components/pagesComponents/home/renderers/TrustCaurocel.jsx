'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "../../../styles.css";
import { API_URL } from "../../../../config/urls";

export default function TrustCaurocel({ category }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    setMounted(true);
  }, []);

  if (!mounted || !category) return null;

  return (
    <>
      {!category?.heading &&
        category?.description.split(/\r?\n/).map((line, index) => (
          <p
            key={index}
            data-aos="fade-up"
            className={`text-[30px] lg:text-[40px] font-[600] text-center leading-tight ${
              index === 0 ? "text-[#191d27]" : "text-[#f15a29]"
            }`}
          >
            {line}
          </p>
        ))}

      <div
        className="px-8 py-8 md:px-4"
        data-aos="fade-up"
      >
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          spaceBetween={30}
          loop={true}
          modules={[]} // You can add modules like Autoplay here
          className="mySwiper py-10"
        >
          {category.posts[0]?.content_images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="card-wrapper">
                <div className="card-inner">
                  <div className="card-face card-front">
                    <img src={image} className="w-28" alt={`Front ${index}`} />
                  </div>
                  <div className="card-face card-back">
                    <img src={image} className="w-28" alt={`Back ${index}`} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
