// src/components/HeroLogger.tsx
import curveImg from "../../assets/Curve-main-bg.webp";
import { useEffect } from "react";
import HeroAnimation from "../pagesComponents/pipelineComponent/renderers/HeroAnimation";
import { MEDIA_URL } from "../../config/urls";

export default function HeroSection({ pageData }) {
  // const [pageData, setPageData] = useState({});


  return (
    <>
      <div
        class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-2 gap-2 lg:px-14 lg:py-10 bg-no-repeat bg-bottom bg-cover min-h-[80vh]"
        style={{ backgroundImage: `url('${curveImg.src}')` }}
      >
        <div class="flex flex-col justify-center gap-4 py-8 px-4 lg:px-15 lg:py-10">
          <h1 class="text-[#FF5F55] font-semibold text-[18px] lg:text-[20px]">
            {pageData.title}
          </h1>

          <div class="inline-block relative mx-auto lg:mx-0 ">
            <h1 class="text-[45px] md:text-[48px] lg:text-[50px] font-semibold relative z-10">
              {pageData.headings[0]}
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
        {pageData?.paragraphs?.map((para, index) => (
          <p key={index} class="text-[16px] font-[500] text-[#616670] leading-6">
            {para}
          </p>
        ))}
        </div>

        <div class="flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0 ">
          {/* <HeroAnimation image={pageData.image} client:load /> */}
          <img
            src={MEDIA_URL+pageData.images?.[0]?.src}
            alt={pageData.images?.[0]?.alt}
            class="w-[500px] md:mx-auto lg:mx-0"
          />
        </div>
      </div>
    </>
  );
}
