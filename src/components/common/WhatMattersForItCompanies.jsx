// src/components/SecondSection.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyYouNeedSection = ({ SectionData, colVal, background }) => {
   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({ once: true });
  }, [mounted]);

  return (
    <section
      className={`demanzo-container text-center ${background} demanzo-section`}
    >
      {/* <div className=""> */}
      <div className="demanzo-max-screen-width">
        {SectionData?.title && (
          <h2 className="demanzo-title my-3">{SectionData.title}</h2>
        )}
        <div className="inline-block relative mx-auto lg:mx-0 mb-10">
          <div className="relative inline-block">
            <h2 className="demanzo-h1 text-center lg:text-center">
              {SectionData.headings[0]}{" "}
            </h2>
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
            <h2 className="demanzo-h1 text-center lg:text-center">
              {SectionData.headings[1]}{" "}
            </h2>
          </div>
        </div>
        <p className="demanzo-p  max-w-7xl mx-auto text-[16px]">
          {SectionData.paragraphs[0]}
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-${colVal[1].value} lg:grid-cols-${colVal[2].value} gap-8 lg:px-30 mt-10`}
        >
          {SectionData?.list_items[0]?.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition"
              {...(mounted && {
                "data-aos": "fade-up",
                "data-aos-duration": "1000",
              })}
            >
              <div
                className="w-14 h-14"
                dangerouslySetInnerHTML={{ __html: card.svg }}
              />

              {card.heading && (
                <h5 className="demanzo-h2 text-left">{card.heading}</h5>
              )}
              <p
                className="demanzo-bold-p"
                dangerouslySetInnerHTML={{ __html: card.para }}
              />
              <hr className="w-full border-gray-200 mt-4" />
            </div>
          ))}
        </div>

        <p className="demanzo-p mt-12  max-w-7xl mx-auto">
          {SectionData.paragraphs[1]}
        </p>
      </div>

      {/* </div> */}
    </section>
  );
};

export default WhyYouNeedSection;

