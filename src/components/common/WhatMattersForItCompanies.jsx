// src/components/SecondSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyYouNeedSection = ({ SectionData, colVal ,background }) => {
  useEffect(() => {
    AOS.init();
  })

  return (
    <section
      className={` px-4 md:px-10 lg:px-[var(--demanzo-section-spacing)] py-[var(--demanzo-section-spacing)] text-center bg-[${background}]`}
    >
      <div className="inline-block relative mx-auto lg:mx-0 mb-10">
        <div className="relative inline-block">
          <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-center">
            {SectionData.headings[0]}{" "}
          </h1>
          <svg
            className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] lg:left-[140px] lg:translate-x-0 z-0"
            width="270"
            height="20"
            viewBox="0 0 270 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15C80 5 190 0 265 12"
              stroke="#7D80E6"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-center">
            {SectionData.headings[1]}{" "}
          </h1>
        </div>
      </div>
      <p className=" text-gray-600 font-medium max-w-7xl mx-auto text-[16px] leading-relaxed">
        {SectionData.paragraphs[0]}
      </p>
      <div
        className={`grid grid-cols-1 lg:grid-cols-${colVal[2].value} gap-8 lg:px-30 mt-10`}
      >
        {SectionData?.list_items[0]?.map((card, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition"
          >
            <div
              className="w-14 h-14"
              dangerouslySetInnerHTML={{ __html: card.svg }}
            />
            <p
              className="text-gray-600 font-medium"
              dangerouslySetInnerHTML={{ __html: card.para }}
            />
            <hr className="w-full border-gray-200 mt-4" />
          </div>
        ))}
      </div>

      <p className="mt-12 text-gray-600 font-medium max-w-7xl mx-auto text-[16px] leading-relaxed">
        {SectionData.paragraphs[5]}
      </p>
    </section>
  );
};

export default WhyYouNeedSection;

