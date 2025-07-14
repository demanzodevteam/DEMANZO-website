import React from "react";
import { motion } from "framer-motion";
import { MEDIA_URL } from "../../config/urls";

export default function InsightHighlightBlock({ pageData }) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-center p-4 md:p-6 lg:p-8 my-10 gap-6 ${pageData.background}`}
    >
      {/* Left Column */}
      <div className="w-full flex justify-center lg:justify-start">
        <div className="w-full max-w-full md:max-w-full lg:max-w-xl bg-white shadow-md rounded-lg p-6">
          <p className="text-[#7D7D7D] text-base md:text-[16px] leading-relaxed">
            {pageData.paragraphs}
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full p-4 md:p-4 flex flex-col gap-6 items-center md:items-start lg:items-start text-center md:text-left lg:text-left">
        <h1 className="text-[#FF5F55] font-semibold text-[18px] lg:text-[20px]">
          {pageData.title}
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          <span>{pageData.headings?.[0]}</span>
        </h2>
        <h1 className="text-[#FF5F55] font-semibold text-[18px] lg:text-[20px]">
          {pageData.headings?.[1]}
        </h1>
        <ul className="space-y-4">
          {pageData?.list_items?.[0]?.map((item, index) => (
            <li key={index} className="flex items-start justify-start">
              <div className="border-2 border-dotted text-red-500 border-red-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 p-1.5">
                {index + 1}
              </div>
              <p className="text-base md:text-lg text-[#191D27] text-left">
                <strong>{item?.heading}</strong> {item?.para}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
