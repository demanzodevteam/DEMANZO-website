import React from "react";
import curveImg from "../../assets/Curve-main-bg.webp";
import { MEDIA_URL } from "../../config/urls";
import GrowthEngineForm from "./GrowthEngineForm";

export default function BuildGrowthEngineSection({ pageData, bgImg }) {
  return (
    <div
      class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-2 gap-2 lg:px-14 lg:py-10 bg-[#E6F8FF] min-h-[80vh]"
      // style={{ backgroundImage: bgImg ? "none" : `url('${curveImg.src}')` }}
    >
      <div class="flex flex-col justify-center gap-4 py-8 px-4 lg:px-15 lg:py-10">
        <h1 class="text-[#FF5F55] font-semibold text-[18px] lg:text-[20px]">
          {pageData[0].title}
        </h1>

        <div class="inline-block relative mx-auto lg:mx-0 ">
          <h1 class="text-[45px] md:text-[48px] lg:text-[50px] font-semibold relative z-10">
            {pageData[0].headings[0]}
          </h1>
          <svg
            class="absolute left-1/2 -translate-x-1/2 lg:left-30 lg:translate-x-0 bottom-20 z-0"
            width="270"
            height="20"
            viewBox="0 0 270 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15C80 5 190 0 265 12"
              stroke="#FF5F55"
              stroke-width="6"
              stroke-linecap="round"
            />
          </svg>
        </div>
        {pageData[0]?.paragraphs?.map((para, index) => (
          <p
            key={index}
            class="text-[16px] font-[500] text-[#616670] leading-6"
          >
            {para}
          </p>
        ))}
      </div>

      <div class="pt-8 pb-12 lg:pt-0 lg:pb-0 ">
        <GrowthEngineForm category={pageData[1]} />
      </div>
      
    </div>
  );
}
