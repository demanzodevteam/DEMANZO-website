// src/components/HeroLogger.tsx
import { useEffect } from "react";
import { MEDIA_URL } from "../../../../config/urls";

export default function HeroSection({ pageData }) {
  // const [pageData, setPageData] = useState({});


  return (
    <>
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-2 gap-2 lg:px-14 lg:py-10 bg-no-repeat bg-bottom bg-cover min-h-[80vh]">
        <div class="flex flex-col justify-center gap-4 py-8 px-4 lg:px-15 lg:py-10">
          <h1 class="text-[#FF5F55] font-semibold text-[18px] lg:text-[20px]">
            {pageData.title}
          </h1>

          <div class="inline-block relative mx-auto lg:mx-0 ">
            <h1 class="text-[45px] md:text-[48px] lg:text-[48px] font-semibold relative z-10">
              {pageData.headings[0]}
            </h1>
          </div>
          {pageData?.card_details?.map((para, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-[16px] font-bold text-[#616670] mb-2">
                {para.heading}
              </h3>
              <p className="text-[16px] font-[500] text-[#616670] leading-6">
                {para.para}
              </p>
            </div>
          ))}
        </div>

        {/* <div class="flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0 ">

          <img
            src={MEDIA_URL + pageData.images?.[0]?.src}
            alt={pageData.images?.[0]?.alt}
            class="w-[500px] md:mx-auto lg:mx-0"
          />
        </div> */}
        <div class="relative flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0">
          {/* Back gray card */}
          <div class="absolute w-[450px] h-[600px] bg-gray-100 rounded-3xl top-1 right-1 z-0"></div>

          {/* Foreground image */}
          <img
            src={MEDIA_URL + pageData.images?.[0]?.src}
            alt={pageData.images?.[0]?.alt}
            class="relative w-[450px] h-[600px] object-cover rounded-3xl z-10 shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
