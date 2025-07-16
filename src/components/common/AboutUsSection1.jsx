import React from "react";
import curveImg from "../../assets/Curve-main-bg.webp";
import { MEDIA_URL } from "../../config/urls";

export default function AboutUsSection1({ pageData }) {

  return (
    <div
      class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-2 gap-2 lg:px-14 lg:py-10 bg-no-repeat bg-bottom bg-cover min-h-[80vh]"
      style={{ backgroundImage: `url('${curveImg.src}')` }}
    >
      <div class="flex flex-col justify-center gap-4 py-8 px-4 lg:px-15 lg:py-10">
        <h2 class="demanzo-title">{pageData.title}</h2>

        <div class="inline-block relative mx-auto lg:mx-0 ">
          <h1 class="demanzo-h1 relative z-10">{pageData.headings[0]}</h1>
        </div>
        {pageData?.paragraphs?.map((para, index) => (
          <p
            key={index}
            class="demanzo-bold-p"
          >
            {para}
          </p>
        ))}
      </div>

      <div class="flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0 ">
        {pageData?.bgImg ? (
          <>
            <div class="relative w-full max-w-md">
              <div class="absolute inset-0 h-[300px] bg-gray-100 transform translate-x-10 -translate-y-12 rounded-[30px] shadow-lg"></div>
              <div class="relative z-10 flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0">
                <img
                  src={MEDIA_URL + pageData.images?.[0]?.src}
                  alt={pageData.images?.[0]?.alt}
                  class="w-[500px] md:mx-auto lg:mx-0 rounded-[30px] "
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              src={MEDIA_URL + pageData.images?.[0]?.src}
              alt={pageData.images?.[0]?.alt}
              class="w-[500px] md:mx-auto lg:mx-0 transition-transform duration-400 hover:-translate-y-4 rounded-sm"
            />
          </>
        )}
      </div>
    </div>
  );
}
