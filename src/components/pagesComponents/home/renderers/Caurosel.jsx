// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import axios from "axios";
import "../../../styles.css";
import { useState, useEffect } from "react";
import { API_URL } from "../../../../config/urls";

export default function Caurosel() {

   const [category, setCategory] = useState({
    name: '',
    slug: '',
    description: '',
    button: '',
    posts: [],
    image: '',
  });
  useEffect(() => {
    axios.get(API_URL + 'category/5')
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch category:', error);
      });
  }, []);

  return (
    <>
      <p class="text-[30px] lg:text-[40px] font-[600] text-[#191d27] text-center pb-6">{category.name}</p>
      <div className="px-8">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={50}
          loop={true}
          grabCursor={true}
          modules={[]}
          className="mySwiper py-10"
        >
          {category.posts?.map((testimonial, index) => (
          <SwiperSlide style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)' }}>
            <div className="p-8">
              <p className="text-[16px] font-[500] text-[#616670]">
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
              <p className="text-[20px] font-[600] text-center text-[#30353b]">{testimonial.title}</p>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>

  );
}
