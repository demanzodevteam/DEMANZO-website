// src/components/FeatureSection.jsx
import { CircleCheckBig } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FiveFeatureSection = ({ pageData }) => {
    useEffect(() => {
      AOS.init();
    });

  return (
    <section
      className={`bg-[${pageData.background}]  px-4 md:px-10 lg:px-20 py-16 space-y-4 text-center`}
    >
      <div className="inline-block relative mx-auto lg:mx-0 mb-20">
        <div className="relative inline-block">
          <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-left">
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

      {/* First Row: 3 Cards */}
      {/* First Row: 3 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pageData.card_details.slice(0, 3).map((card, index) => (
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-left space-y-4 min-h-[200px]"
          >
            <div className="flex items-center space-x-2">
              <div className="text-[#447EFC]">
                <CircleCheckBig />
              </div>
              <h2 className="text-lg font-semibold">{card.heading}</h2>
            </div>
            <p className="text-[#616670]">{card.para}</p>
            {/* <hr className="border-t border-gray-200" /> */}
          </div>
        ))}
      </div>

      {/* Second Row: Cards 4 & 5 each taking 1/2 width */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pageData.card_details.slice(3, 5).map((card, index) => (
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            key={index}
            className="p-6 bg-white rounded-lg shadow-md text-left space-y-4 min-h-[200px]"
          >
            <div className="flex items-center space-x-2">
              <div className="text-[#447EFC]">
                <CircleCheckBig />
              </div>
              <h2 className="text-lg font-semibold">{card.heading}</h2>
            </div>
            <p className="text-[#616670]">{card.para}</p>
            {/* <hr className="border-t border-gray-200" /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FiveFeatureSection;
