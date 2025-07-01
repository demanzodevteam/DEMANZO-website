// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../styles.css";
import { Pagination } from 'swiper/modules';
import rb1 from '../../../../assets/rb1.webp'

export default function BlogCourocel() {
  return (
    <div className="px-8 pb-10">
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
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper py-10 absolute"
      >
        <SwiperSlide style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)' }}>
            <div className="relative rounded group" >
                <div className="relative">
                    <img src={rb1.src} alt="" className="w-full rounded-t-xl" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl flex items-center justify-center">
                    <a href="#">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-300"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        >
                        <path
                            fill="currentColor"
                            d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex flex-wrap py-2">
                        <a href="#" className="text-[15px] font-[600] text-[#30353b] bg-[#fff44f] px-2 py-1 rounded-full">Blogging</a>
                    </div>
                    <a href="#"><p className="text-[20px] font-[600] text-[#1d1847] text-start py-2">What is Demand Generation and its Role in</p></a>
                    <p className="text-[16px] font-[500] text-[#616670] text-start py-2 pb-6">Featured Image: Marketing team analyzing B2B demand generation st</p>
                    <hr />
                    <div className="flex justify-between items-center py-3 pt-6">
                        <div className="flex gap-1">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.8263 3.28809H2.88559C2.38584 3.28921 1.90688 3.48823 1.55351 3.8416C1.20013 4.19498 1.00112 4.67393 1 5.17368V19.1144C1.00112 19.6141 1.20013 20.0931 1.55351 20.4464C1.90688 20.7998 2.38584 20.9988 2.88559 21H16.8263C17.326 20.9988 17.805 20.7998 18.1584 20.4464C18.5117 20.0931 18.7107 19.6141 18.7119 19.1144V5.17368C18.7107 4.67393 18.5117 4.19498 18.1584 3.8416C17.805 3.48823 17.326 3.28921 16.8263 3.28809V3.28809Z" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 9.5166H9.28449" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 13.3945H14.5175" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M7.12305 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M12.5898 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> </svg>
                            <p  className="text-[17px] font-[500] text-[#252525]">June 20, 2025</p>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48597 0 0 4.48597 0 10C0 15.5141 4.48597 20 10 20C15.5141 20 20.0001 15.514 20.0001 10C20.0001 4.48604 15.514 0 10 0ZM10 19.0032C5.03557 19.0032 0.996721 14.9644 0.996721 10C0.996721 5.03563 5.03557 0.996721 10 0.996721C14.9645 0.996721 19.0033 5.03557 19.0033 9.99997C19.0033 14.9644 14.9644 19.0032 10 19.0032Z" fill="#7347FC"></path>
                            <path d="M9.50204 9.50181H5.52539V10.4985H10.4988V2.91602H9.50204V9.50181Z" fill="#7347FC"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)' }}>
            <div className="relative rounded group" >
                <div className="relative">
                    <img src={rb1.src} alt="" className="w-full rounded-t-xl" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl flex items-center justify-center">
                    <a href="#">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-300"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        >
                        <path
                            fill="currentColor"
                            d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex flex-wrap py-2">
                        <a href="#" className="text-[15px] font-[600] text-[#30353b] bg-[#fff44f] px-2 py-1 rounded-full">Blogging</a>
                    </div>
                    <a href="#"><p className="text-[20px] font-[600] text-[#1d1847] text-start py-2">What is Demand Generation and its Role in</p></a>
                    <p className="text-[16px] font-[500] text-[#616670] text-start py-2 pb-6">Featured Image: Marketing team analyzing B2B demand generation st</p>
                    <hr />
                    <div className="flex justify-between items-center py-3 pt-6">
                        <div className="flex gap-1">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.8263 3.28809H2.88559C2.38584 3.28921 1.90688 3.48823 1.55351 3.8416C1.20013 4.19498 1.00112 4.67393 1 5.17368V19.1144C1.00112 19.6141 1.20013 20.0931 1.55351 20.4464C1.90688 20.7998 2.38584 20.9988 2.88559 21H16.8263C17.326 20.9988 17.805 20.7998 18.1584 20.4464C18.5117 20.0931 18.7107 19.6141 18.7119 19.1144V5.17368C18.7107 4.67393 18.5117 4.19498 18.1584 3.8416C17.805 3.48823 17.326 3.28921 16.8263 3.28809V3.28809Z" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 9.5166H9.28449" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 13.3945H14.5175" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M7.12305 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M12.5898 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> </svg>
                            <p  className="text-[17px] font-[500] text-[#252525]">June 20, 2025</p>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48597 0 0 4.48597 0 10C0 15.5141 4.48597 20 10 20C15.5141 20 20.0001 15.514 20.0001 10C20.0001 4.48604 15.514 0 10 0ZM10 19.0032C5.03557 19.0032 0.996721 14.9644 0.996721 10C0.996721 5.03563 5.03557 0.996721 10 0.996721C14.9645 0.996721 19.0033 5.03557 19.0033 9.99997C19.0033 14.9644 14.9644 19.0032 10 19.0032Z" fill="#7347FC"></path>
                            <path d="M9.50204 9.50181H5.52539V10.4985H10.4988V2.91602H9.50204V9.50181Z" fill="#7347FC"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)' }}>
            <div className="relative rounded group" >
                <div className="relative">
                    <img src={rb1.src} alt="" className="w-full rounded-t-xl" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl flex items-center justify-center">
                    <a href="#">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-300"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        >
                        <path
                            fill="currentColor"
                            d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex flex-wrap py-2">
                        <a href="#" className="text-[15px] font-[600] text-[#30353b] bg-[#fff44f] px-2 py-1 rounded-full">Blogging</a>
                    </div>
                    <a href="#"><p className="text-[20px] font-[600] text-[#1d1847] text-start py-2">What is Demand Generation and its Role in</p></a>
                    <p className="text-[16px] font-[500] text-[#616670] text-start py-2 pb-6">Featured Image: Marketing team analyzing B2B demand generation st</p>
                    <hr />
                    <div className="flex justify-between items-center py-3 pt-6">
                        <div className="flex gap-1">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.8263 3.28809H2.88559C2.38584 3.28921 1.90688 3.48823 1.55351 3.8416C1.20013 4.19498 1.00112 4.67393 1 5.17368V19.1144C1.00112 19.6141 1.20013 20.0931 1.55351 20.4464C1.90688 20.7998 2.38584 20.9988 2.88559 21H16.8263C17.326 20.9988 17.805 20.7998 18.1584 20.4464C18.5117 20.0931 18.7107 19.6141 18.7119 19.1144V5.17368C18.7107 4.67393 18.5117 4.19498 18.1584 3.8416C17.805 3.48823 17.326 3.28921 16.8263 3.28809V3.28809Z" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 9.5166H9.28449" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 13.3945H14.5175" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M7.12305 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M12.5898 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> </svg>
                            <p  className="text-[17px] font-[500] text-[#252525]">June 20, 2025</p>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48597 0 0 4.48597 0 10C0 15.5141 4.48597 20 10 20C15.5141 20 20.0001 15.514 20.0001 10C20.0001 4.48604 15.514 0 10 0ZM10 19.0032C5.03557 19.0032 0.996721 14.9644 0.996721 10C0.996721 5.03563 5.03557 0.996721 10 0.996721C14.9645 0.996721 19.0033 5.03557 19.0033 9.99997C19.0033 14.9644 14.9644 19.0032 10 19.0032Z" fill="#7347FC"></path>
                            <path d="M9.50204 9.50181H5.52539V10.4985H10.4988V2.91602H9.50204V9.50181Z" fill="#7347FC"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)' }}>
            <div className="relative rounded group" >
                <div className="relative">
                    <img src={rb1.src} alt="" className="w-full rounded-t-xl" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl flex items-center justify-center">
                    <a href="#">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-300"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        >
                        <path
                            fill="currentColor"
                            d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex flex-wrap py-2">
                        <a href="#" className="text-[15px] font-[600] text-[#30353b] bg-[#fff44f] px-2 py-1 rounded-full">Blogging</a>
                    </div>
                    <a href="#"><p className="text-[20px] font-[600] text-[#1d1847] text-start py-2">What is Demand Generation and its Role in</p></a>
                    <p className="text-[16px] font-[500] text-[#616670] text-start py-2 pb-6">Featured Image: Marketing team analyzing B2B demand generation st</p>
                    <hr />
                    <div className="flex justify-between items-center py-3 pt-6">
                        <div className="flex gap-1">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.8263 3.28809H2.88559C2.38584 3.28921 1.90688 3.48823 1.55351 3.8416C1.20013 4.19498 1.00112 4.67393 1 5.17368V19.1144C1.00112 19.6141 1.20013 20.0931 1.55351 20.4464C1.90688 20.7998 2.38584 20.9988 2.88559 21H16.8263C17.326 20.9988 17.805 20.7998 18.1584 20.4464C18.5117 20.0931 18.7107 19.6141 18.7119 19.1144V5.17368C18.7107 4.67393 18.5117 4.19498 18.1584 3.8416C17.805 3.48823 17.326 3.28921 16.8263 3.28809V3.28809Z" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 9.5166H9.28449" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 13.3945H14.5175" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M7.12305 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M12.5898 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> </svg>
                            <p  className="text-[17px] font-[500] text-[#252525]">June 20, 2025</p>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48597 0 0 4.48597 0 10C0 15.5141 4.48597 20 10 20C15.5141 20 20.0001 15.514 20.0001 10C20.0001 4.48604 15.514 0 10 0ZM10 19.0032C5.03557 19.0032 0.996721 14.9644 0.996721 10C0.996721 5.03563 5.03557 0.996721 10 0.996721C14.9645 0.996721 19.0033 5.03557 19.0033 9.99997C19.0033 14.9644 14.9644 19.0032 10 19.0032Z" fill="#7347FC"></path>
                            <path d="M9.50204 9.50181H5.52539V10.4985H10.4988V2.91602H9.50204V9.50181Z" fill="#7347FC"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)' }}>
            <div className="relative rounded group" >
                <div className="relative">
                    <img src={rb1.src} alt="" className="w-full rounded-t-xl" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl flex items-center justify-center">
                    <a href="#">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-300"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        >
                        <path
                            fill="currentColor"
                            d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex flex-wrap py-2">
                        <a href="#" className="text-[15px] font-[600] text-[#30353b] bg-[#fff44f] px-2 py-1 rounded-full">Blogging</a>
                    </div>
                    <a href="#"><p className="text-[20px] font-[600] text-[#1d1847] text-start py-2">What is Demand Generation and its Role in</p></a>
                    <p className="text-[16px] font-[500] text-[#616670] text-start py-2 pb-6">Featured Image: Marketing team analyzing B2B demand generation st</p>
                    <hr />
                    <div className="flex justify-between items-center py-3 pt-6">
                        <div className="flex gap-1">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.8263 3.28809H2.88559C2.38584 3.28921 1.90688 3.48823 1.55351 3.8416C1.20013 4.19498 1.00112 4.67393 1 5.17368V19.1144C1.00112 19.6141 1.20013 20.0931 1.55351 20.4464C1.90688 20.7998 2.38584 20.9988 2.88559 21H16.8263C17.326 20.9988 17.805 20.7998 18.1584 20.4464C18.5117 20.0931 18.7107 19.6141 18.7119 19.1144V5.17368C18.7107 4.67393 18.5117 4.19498 18.1584 3.8416C17.805 3.48823 17.326 3.28921 16.8263 3.28809V3.28809Z" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 9.5166H9.28449" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 13.3945H14.5175" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M7.12305 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M12.5898 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> </svg>
                            <p  className="text-[17px] font-[500] text-[#252525]">June 20, 2025</p>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48597 0 0 4.48597 0 10C0 15.5141 4.48597 20 10 20C15.5141 20 20.0001 15.514 20.0001 10C20.0001 4.48604 15.514 0 10 0ZM10 19.0032C5.03557 19.0032 0.996721 14.9644 0.996721 10C0.996721 5.03563 5.03557 0.996721 10 0.996721C14.9645 0.996721 19.0033 5.03557 19.0033 9.99997C19.0033 14.9644 14.9644 19.0032 10 19.0032Z" fill="#7347FC"></path>
                            <path d="M9.50204 9.50181H5.52539V10.4985H10.4988V2.91602H9.50204V9.50181Z" fill="#7347FC"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)' }}>
            <div className="relative rounded group" >
                <div className="relative">
                    <img src={rb1.src} alt="" className="w-full rounded-t-xl" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl flex items-center justify-center">
                    <a href="#">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-300"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        >
                        <path
                            fill="currentColor"
                            d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex flex-wrap py-2">
                        <a href="#" className="text-[15px] font-[600] text-[#30353b] bg-[#fff44f] px-2 py-1 rounded-full">Blogging</a>
                    </div>
                    <a href="#"><p className="text-[20px] font-[600] text-[#1d1847] text-start py-2">What is Demand Generation and its Role in</p></a>
                    <p className="text-[16px] font-[500] text-[#616670] text-start py-2 pb-6">Featured Image: Marketing team analyzing B2B demand generation st</p>
                    <hr />
                    <div className="flex justify-between items-center py-3 pt-6">
                        <div className="flex gap-1">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.8263 3.28809H2.88559C2.38584 3.28921 1.90688 3.48823 1.55351 3.8416C1.20013 4.19498 1.00112 4.67393 1 5.17368V19.1144C1.00112 19.6141 1.20013 20.0931 1.55351 20.4464C1.90688 20.7998 2.38584 20.9988 2.88559 21H16.8263C17.326 20.9988 17.805 20.7998 18.1584 20.4464C18.5117 20.0931 18.7107 19.6141 18.7119 19.1144V5.17368C18.7107 4.67393 18.5117 4.19498 18.1584 3.8416C17.805 3.48823 17.326 3.28921 16.8263 3.28809V3.28809Z" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 9.5166H9.28449" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M4.79297 13.3945H14.5175" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M7.12305 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M12.5898 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path> </svg>
                            <p  className="text-[17px] font-[500] text-[#252525]">June 20, 2025</p>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48597 0 0 4.48597 0 10C0 15.5141 4.48597 20 10 20C15.5141 20 20.0001 15.514 20.0001 10C20.0001 4.48604 15.514 0 10 0ZM10 19.0032C5.03557 19.0032 0.996721 14.9644 0.996721 10C0.996721 5.03563 5.03557 0.996721 10 0.996721C14.9645 0.996721 19.0033 5.03557 19.0033 9.99997C19.0033 14.9644 14.9644 19.0032 10 19.0032Z" fill="#7347FC"></path>
                            <path d="M9.50204 9.50181H5.52539V10.4985H10.4988V2.91602H9.50204V9.50181Z" fill="#7347FC"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
