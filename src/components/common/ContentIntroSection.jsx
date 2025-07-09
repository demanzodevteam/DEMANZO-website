// src/components/SecondSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContentIntroSection = ({ SectionData }) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section
      className={` px-4 md:px-10 lg:px-[var(--demanzo-section-spacing)] py-[var(--demanzo-section-spacing)] text-center ${SectionData.background}`}
    >
      <div className="inline-block relative mx-auto lg:mx-0 mb-10 py-10">
        <div className="relative inline-block">
          <h1 className="text-[45px] md:text-[48px] lg:text-[40px] font-semibold relative z-10 leading-tight text-center lg:text-center">
            {SectionData.headings[0]}{" "}
          </h1>
          <h1 className="text-[45px] md:text-[48px] lg:text-[40px] font-semibold relative z-10 leading-tight text-center lg:text-center">
            {SectionData.headings[1]}{" "}
          </h1>
          <p className="mt-12 text-gray-600 font-medium max-w-4xl mx-auto text-[16px] leading-relaxed">
            {SectionData.paragraphs[0]}
          </p>
        </div>
        <div className="mt-1">
          <hr className="border-t-2 border-[#EEC9C9] mt-20 min-w-8xl" />
        </div>
      </div>
    </section>
  );
};

export default ContentIntroSection;

