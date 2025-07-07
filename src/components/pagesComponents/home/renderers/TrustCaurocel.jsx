// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import "../../../styles.css";
import { API_URL } from "../../../../config/urls";

export default function TrustCaurocel({category}) {
        useEffect(() => {
    AOS.init();
  }, []);
  // const [category, setCategory] = useState({
  //   name: '',
  //   slug: '',
  //   description: '',
  //   button: '',
  //   posts: [],
  //   image: '',
  // });
  // useEffect(() => {
  //   axios.get(API_URL + 'category/4')
  //     .then((response) => {
  //       setCategory(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Failed to fetch category:', error);
  //     });
  // }, []);

  return (
    <>
      {category?.description.split(/\r?\n/).map((line, index) => (
        <p 
     data-aos="fade-up" data-aos-duration="2000" 
          key={index}
          className={`text-[30px] lg:text-[40px] font-[600] text-center leading-tight ${index === 0 ? "text-[#191d27]" : "text-[#f15a29]"
            }`}
        >
          {line}
        </p>
      ))}

      {/* <p className="text-[30px] lg:text-[40px] font-[600] text-[#e05c24] text-center">SaaS leaders across industries</p> */}
      <div className="px-8 py-8 md:px-4" data-aos="fade-up" data-aos-duration="2000" >
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
          modules={[]}
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
