// src/components/SecondSection.jsx
import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ServicesWeOffer = ({ SectionData, colVal }) => {
    useEffect(() => {
        AOS.init();
        });

    return (
      <section
        className={` px-4 md:px-10 lg:px-[var(--demanzo-section-spacing)] py-[var(--demanzo-section-spacing)] text-center`}
      >
        <div className="inline-block relative mx-auto lg:mx-0 ">
          <div className="relative inline-block">
            {SectionData?.title && (
              <h1 className="demanzo-title my-3">{SectionData.title}</h1>
            )}
            <h1 className="demanzo-h1 text-center lg:text-center">
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
            <h1 className="demanzo-h1 text-center lg:text-center">
              {SectionData.heading}{" "}
            </h1>
          </div>
        </div>
        <p className="demanzo-p mt-12 max-w-7xl mx-auto text-[16px]">
          {SectionData.paragraphs[0]}
        </p>
        <div
          className={`grid grid-cols-1 lg:grid-cols-${colVal[2].value} gap-8 lg:px-30 mt-10`}
        >
          {SectionData?.list_items[0]?.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition"
              data-aos="zoom-in"
            >
              <div className="flex pb-2 justify-center items-center text-gray-700">
                <div
                  className="w-14 h-14"
                  dangerouslySetInnerHTML={{ __html: card.svg }}
                />
                <h2 className="demanzo-h2 pl-2 ">{card.heading}</h2>
              </div>

              <p
                className="demanzo-p text-left"
                dangerouslySetInnerHTML={{ __html: card.para }}
              />
              <hr className="w-full border-gray-200 mt-4" />
            </div>
          ))}
        </div>

        <p className="demanzo-bold-p *:mt-12 max-w-7xl mx-auto ">
          {SectionData.paragraphs[5]}
        </p>
      </section>
    );
};

export default ServicesWeOffer;

