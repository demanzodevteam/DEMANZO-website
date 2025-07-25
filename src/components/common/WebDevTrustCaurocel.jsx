// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { BASE_URL } from "../../config/urls";
import "swiper/css";
import "../styles.css";

const res = await fetch(BASE_URL + "wp-json/custom/v1/client-titles");
const category = await res.json();

export default function TrustCaurocel() {

  return (
    <div className="demanzo-container-auto px-4 md:px-6 py-8">
      <Swiper
        modules={[Autoplay, FreeMode]} // ✅ Include FreeMode
        loop={true}
        freeMode={true} // ✅ Enables smooth scrolling
        speed={4000} // ✅ Higher speed for smoother movement
        autoplay={{
          delay: 0, // ✅ Immediate autoplay (no pause)
          disableOnInteraction: false,
        }}
        grabCursor={true} // Optional: shows grabbing cursor
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={30}
        className="mySwiper py-10"
      >
        {category.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card-wrapper">
              <div className="card-inner">
                <div className="card-face card-front">
                  <img
                    src={`${BASE_URL}${item["front-image"]}`}
                    className="w-28"
                    alt={`${item.title}`}
                  />
                </div>
                <div className="card-face card-back">
                  <img
                    src={`${BASE_URL}${item["back-image"]}`}
                    className="w-28"
                    alt={`${item.title}`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
