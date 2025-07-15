// src/components/FeatureSection.jsx
import { CircleCheckBig } from "lucide-react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const FeatureSection = ({ pageData }) => {
   const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
      AOS.init({ once: true });
    }, []);

  return (
    <section
      className={`bg-${pageData.background}  px-4 md:px-10 lg:px-20 py-16 space-y-4 text-center`}
    >
      <div className="inline-block relative mx-auto lg:mx-0 mb-20">
        <div className="relative inline-block">
          <h1 className="demanzo-h1 leading-tight text-center lg:text-left">
            {pageData.title}
          </h1>
          {/* SVG below heading */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] lg:left-[180px] lg:translate-x-0 z-0"
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
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 lg:px-10">
        {pageData.card_details.map((card_details, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md space-y-4"
             {...(mounted ? { "data-aos": "zoom-in-down", "data-aos-duration": "2000" } : {})}
          >
            <div className="flex flex-row items-center justify-center px-3 space-x-2">
              <div className="text-[#447EFC]">
                <CircleCheckBig />
              </div>
              <h2 className="demanzo-h2 mb-2">
                {card_details.heading}
              </h2>
            </div>
            <p className="demanzo-p text-start px-4">
              {card_details.para}
            </p>
            <hr className="border-t border-[#E0E0E0] w-full mb-6" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
