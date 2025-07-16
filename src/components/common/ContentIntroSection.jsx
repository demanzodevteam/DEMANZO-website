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
          <h2 className="demanzo-h1 relative z-10 leading-tight text-center lg:text-center">
            {SectionData.headings[0]}{" "}
          </h2>
          <h2 className="demanzo-h1 relative z-10 leading-tight text-center lg:text-center">
            {SectionData.headings[1]}{" "}
          </h2>
          <p className="demanzo-bold-p !mt-12 max-w-4xl mx-auto leading-relaxed">
            {SectionData.paragraphs[0]}
          </p>
        </div>
        <div className="px-0">
          <hr className="border-t-2 border-[#EEC9C9] mt-20 w-full" />
        </div>
      </div>
    </section>
  );
};

export default ContentIntroSection;

