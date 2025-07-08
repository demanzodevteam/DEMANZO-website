// src/components/SecondSection.jsx
import React, { useEffect } from "react";

const HighlightSteps = ({ SectionData }) => {

  return (
    <section
      className={` px-4 md:px-10 lg:px-[var(--demanzo-section-spacing)] py-[var(--demanzo-section-spacing)] text-center`}
    >
      <div className="inline-block relative mx-auto lg:mx-0 mb-10">
        <div className="relative inline-block">
          <h1 className="text-[45px] text-[#616670] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-center">
            {SectionData.headings[0]}
          </h1>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-${SectionData.colVal[2].value} lg:grid-cols-${SectionData.colVal[2].value} gap-6 lg:px-30 mt-10`}
      >
        {SectionData?.list_items[0]?.map((card, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-white max-w-[330px] w-full shadow-lg rounded-xl p-6 py-10 flex flex-col sm:flex-row sm:items-start sm:space-x-4 items-center text-center sm:text-left gap-4 hover:shadow-xl transition">
              {/* SVG */}
              <div
                className="w-14 h-14 flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: card.svg }}
              />

              {/* Text */}
              <div>
                <p
                  className="text-[#616670] font-medium text-[16px]"
                  dangerouslySetInnerHTML={{ __html: card.para }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-[#616670] font-medium max-w-7xl mx-auto text-[16px] leading-relaxed">
        {SectionData.paragraphs[0]}
      </p>
    </section>
  );
};

export default HighlightSteps;
