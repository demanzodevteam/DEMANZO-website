import React from "react";
import { MEDIA_URL } from "../../config/urls";


const DynamicBanner = ({ pageData }) => {
  return (
    <div className="bg-[#e6f8ff] px-[15px] py-[90px] relative">
      <div className="relative mx-auto lg:mx-0 text-center flex items-center justify-center">
        <h1 className="demanzo-h1 ">
          {pageData.name}<br></br>
        </h1>
        <svg
          className="mt-2 mx-auto w-[270px] h-[20px] absolute bottom-0"
          viewBox="0 0 270 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15C80 5 190 0 265 12"
            stroke="#FF5F55"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <img
        src={MEDIA_URL + '2025/07/Vector-668.png'}
        alt={pageData.images?.[0]?.alt}
        class="absolute bottom-0 left-40 hidden lg:block"
      />
    </div>
  );
};

export default DynamicBanner;
