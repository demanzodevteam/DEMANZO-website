// src/components/HeroLogger.tsx
import curveImg from "../../assets/Curve-main-bg.webp";
import { MEDIA_URL } from "../../config/urls";

export default function HeroSection({ pageData, bgImg }) {
  
  return (
    <>
      <div
        class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-2 gap-2 lg:px-14 lg:py-10 bg-no-repeat bg-bottom bg-cover min-h-[80vh]"
        style={{ backgroundImage: bgImg ? "none" : `url('${curveImg.src}')` }}
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
          {bgImg ? (<>
            <div class="relative w-full max-w-md">
              <div class="absolute inset-0 h-[300px] bg-gray-100 transform translate-x-10 -translate-y-12 rounded-[30px] shadow-lg"></div>
              <div class="relative z-10 flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0">
                <img
                  src={MEDIA_URL + pageData.images?.[0]?.src}
                  alt={pageData.images?.[0]?.alt}
                  class="w-[500px] md:mx-auto lg:mx-0 rounded-[30px]"
                />
              </div>
            </div>
          </>) : <>
            {/* <HeroAnimation image={pageData.image} client:load /> */}
            <img
              src={MEDIA_URL + pageData.images?.[0]?.src}
              alt={pageData.images?.[0]?.alt}
              class="w-[500px] md:mx-auto lg:mx-0"
            />
          </>
          }

        </div>

        <div className="lg:col-span-2 w-full flex flex-row justify-center gap-4 px-15">
          <div className="w-1/2 flex flex-col gap-4">
            {pageData?.list_items[0]?.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center justify-start gap-10">
                <svg
                  className="w-5 h-5 mr-2 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12l3 3 5-5"
                  />
                </svg>
                <span className="text-[15px] text-[#54595f]">{item.para}</span>
              </div>
            ))}
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            {pageData?.list_items[0]?.slice(3, 6).map((item, index) => (
              <div key={index} className="flex items-center justify-start gap-10">
                <svg
                  className="w-5 h-5 mr-2 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12l3 3 5-5"
                  />
                </svg>
                <span className="text-[15px] text-[#54595f]">{item.para}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
