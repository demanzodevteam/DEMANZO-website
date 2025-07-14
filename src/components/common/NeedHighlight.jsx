// src/components/NeedHighlightSection.jsx
import React from "react";


const NeedHighlight = ({ SectionData }) => {
  return (
    <section className="px-4 md:px-10 lg:px-[var(--demanzo-section-spacing)] py-[var(--demanzo-section-spacing)] text-center bg-[#F8FDFF]">
      <div className="inline-block relative mx-auto lg:mx-0 mb-10">
        <div className="relative inline-block">
          <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-center">
            {SectionData?.headings?.[0]}
          </h1>
        </div>
      </div>

      {
        SectionData?.paragraphs[0] != '' && (
          <p className="mt-12 text-gray-600 font-medium max-w-7xl mx-auto text-[16px] leading-relaxed">
            {SectionData?.paragraphs[0]}
          </p>
        )
      }


      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:px-30 mt-10 items-stretch">
        {SectionData?.list_items[0]?.map((card, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={index}
              className={`group shadow-md rounded-xl px-8 py-10 flex flex-col justify-between items-center space-y-4 transition max-w-[360px] w-full h-full mx-auto
        ${isOdd
                  ? "bg-white text-black hover:bg-[#060A33] hover:text-white"
                  : "bg-[#060A33] text-white"
                }`}
            >
              <div
                className={`w-14 h-14 transition 
          ${isOdd
                    ? "text-[#0A6AAD] group-hover:text-white"
                    : "text-[#0A6AAD] group-hover:text-white"
                  }`}
                dangerouslySetInnerHTML={{ __html: card?.svg || "" }}
              />
              <p
                className="font-medium text-[16px] text-center transition"
                dangerouslySetInnerHTML={{ __html: card?.para || "<span>&nbsp;</span>" }}
              />
            </div>
          );
        })}
      </div>

        <div className="mt-12 flex justify-center pb-20">
      {SectionData?.paragraphs[1] && SectionData.paragraphs[1].trim() !== "" && (

          <button
            type="submit"
            className="w-full lg:w-auto text-white bg-[#0A6AAD] px-6 py-3 rounded-full mt-8"
          >
            {SectionData.paragraphs[1]}
          </button>
      )}

        </div>

    </section>
  );
};

export default NeedHighlight;
