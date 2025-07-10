import React from "react";
import curveImg from "../../assets/Curve-main-bg.webp";
import { MEDIA_URL } from "../../config/urls";

export default function AboutUsFeatures({ pageData }) {
  console.log(pageData?.list_items, "pageDAta");

  return (
    <div
      class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-2 gap-2 lg:px-14 lg:py-10 bg-no-repeat bg-bottom bg-cover min-h-[80vh]"
      //   style={{
      //     backgroundImage: `url('${MEDIA_URL + pageData.images?.[0]?.src}')`,
      //   }}
    >
      <div className="col-span-2 px-4 lg:px-15">
        <p class="text-[20px] font-[500] text-[#616670] leading-9">
          {pageData?.paragraphs[0]}
        </p>
      </div>
      <div class="flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0 ">
        {
          <>
            {/* <HeroAnimation image={pageData.image} client:load /> */}
            <img
              src={MEDIA_URL + pageData.images?.[1]?.src}
              alt={pageData.images?.[1]?.alt}
              class="w-[500px] md:mx-auto lg:mx-0 transition-transform duration-400 hover:-translate-x-4 rounded-sm"
            />
          </>
        }
      </div>
      <div class="flex flex-col justify-center gap-4 py-8 lg:py-10">
        <p class="text-[20px] font-[500] text-[#616670] mb-[40px]">
          {pageData?.paragraphs[1]}
        </p>

        <div class="inline-block relative mx-auto lg:mx-0 ">
          <h1 class="text-2xl md:text-[48px] lg:text-[50px] font-semibold relative z-10">
            {pageData.headings[0]}
          </h1>
        </div>
        <p class="text-[16px] font-[500] text-[#616670] leading-6">
          {pageData?.paragraphs[2]}
        </p>
        <p class="text-[16px] font-[500] text-[#616670] leading-6">
          {pageData?.paragraphs[3]}
        </p>
      </div>

      <div
        className={`col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-30 my-10`}
      >
        {pageData?.list_items[0]?.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white md:gap-4 shadow-md rounded-xl px-8 py-8 md:py-10  items-center space-y-4 transition"
          >
            <div
              className="w-14 h-14"
              dangerouslySetInnerHTML={{ __html: card.svg }}
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-[25px] font-bold text-center md:text-left leading-8" dangerouslySetInnerHTML={{ __html: card.heading }} />
              <p
                className="text-gray-600 text-center md:text-left font-medium"
                dangerouslySetInnerHTML={{ __html: card.para }}
              />
            </div>
            {/* <hr className="w-full border-gray-200 mt-4" /> */}
          </div>
        ))}
      </div>

      {/* <div className="lg:col-span-2 w-full flex flex-row justify-center gap-4 px-15">
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
      </div> */}
    </div>
  );
}
