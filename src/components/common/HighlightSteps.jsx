// src/components/SecondSection.jsx
import React from "react";
import { motion } from "framer-motion";

const animationProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: false, amount: 0.1 },
};

const HighlightSteps = ({ SectionData }) => {
  return (
    <section
      className={`px-4 md:px-10 lg:px-[var(--demanzo-section-spacing)] py-[var(--demanzo-section-spacing)] text-center`}
    >
      <div className="inline-block relative mx-auto lg:mx-0 mb-10">
        <div className="relative inline-block space-y-6">
          <h1 className="demanzo-h1 leading-tight text-center lg:text-center">
            {SectionData.headings[0]}
          </h1>
          {SectionData?.paragraphs?.[0] && (
            <p className="demanzo-bold-p mx-auto text-[16px] leading-relaxed">
              {SectionData.paragraphs[0]}
            </p>
          )}
        </div>
      </div>

      {/* First 6 cards */}
      <div
        className={`grid grid-cols-1 md:grid-cols-${SectionData.colVal[2].value} lg:grid-cols-${SectionData.colVal[2].value} gap-6 lg:px-30`}
      >
        {SectionData?.list_items[0]?.slice(0, 6).map((card, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            {...animationProps}
          >
            <div
              className="bg-white max-w-[330px] w-full shadow-lg rounded-xl p-6 py-10 
                flex flex-col lg:flex-row lg:items-start lg:space-x-4 
                items-center text-center lg:text-left gap-2 hover:shadow-xl transition"
            >
              {/* SVG */}
              <div
                className="w-14 h-14 flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: card.svg }}
              />
              {/* Text */}
              <div>
                <h1
                  className="demanzo-h2 mb-4"
                  dangerouslySetInnerHTML={{ __html: card.heading }}
                />
                <p
                  className="demanzo-bold-p"
                  dangerouslySetInnerHTML={{ __html: card.para }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 7th card centered */}
      {SectionData?.list_items[0]?.length > 6 && (
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:px-30 mt-10"
          {...animationProps}
        >
          <div className="lg:col-start-2 flex justify-center">
            <div
              className="bg-white max-w-[330px] w-full shadow-lg rounded-xl p-6 py-10 
                flex flex-col lg:flex-row lg:items-start lg:space-x-4 
                items-center text-center lg:text-left gap-2 hover:shadow-xl transition"
            >
              {/* SVG */}
              <div
                className="w-14 h-14 flex-shrink-0"
                dangerouslySetInnerHTML={{
                  __html: SectionData.list_items[0][6]?.svg,
                }}
              />
              {/* Text */}
              <div>
                <h1
                  className="demanzo-h2 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: SectionData.list_items[0][6]?.heading,
                  }}
                />
                <p
                  className="demanzo-bold-p"
                  dangerouslySetInnerHTML={{
                    __html: SectionData.list_items[0][6]?.para,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <p className="demanzo-p mt-12 max-w-7xl mx-auto text-[16px] leading-relaxed">
        {SectionData.paragraphs[1]}
      </p>
    </section>
  );
};

export default HighlightSteps;
