// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import payjo from "../assets/payjo_logo.png";
import embitel from "../assets/embitel-logo.jpg";
import manthan from "../assets/manthan.jpg";
import shopbossa from "../assets/shopbossa.jpg";
import shopinspiredlivinglogo from "../assets/shopinspiredlivinglogo.jpg";
import totango from "../assets/Totango_logo.jpg";
import tredence from "../assets/Tredence.png";
import "./styles.css";

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
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card-inner">
              <div className="card-face card-front">
                <img src={payjo.src} className="w-28" alt="" />
              </div>
              <div className="card-face card-back">
                <img src={payjo.src} className="w-28" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
}
