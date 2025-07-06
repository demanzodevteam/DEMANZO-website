// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { API_URL } from "../../../../config/urls";
import "swiper/css";
import "./styles.css";

const res = await fetch(API_URL + 'category/4');
const category = await res.json();

export default function TrustCaurocel() {
  return (
    <div className="px-8 py-8 md:px-4">
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
  );
}
