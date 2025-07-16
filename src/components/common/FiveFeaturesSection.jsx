// src/components/FiveFeatureSection.jsx
import { CircleCheckBig } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FiveFeatureSection = ({ pageData }) => {
  // Initialize AOS once on mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      style={{ backgroundColor: pageData.background }}
      className="px-4 md:px-10 lg:px-20 py-16 space-y-4 text-center"
    >
      {/* Title and SVG underline */}
      <div className="inline-block relative mx-auto lg:mx-0 mb-20">
        <div className="relative inline-block">
          <h2 className="demanzo-h1 leading-tight text-center lg:text-left">
            {pageData.title}
          </h2>
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

      {/* First row: 3 cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pageData.card_details.slice(0, 3).map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="p-6 bg-white rounded-lg shadow-md text-left space-y-4 min-h-[200px]"
          >
            <div className="flex items-center space-x-2">
              <div className="text-[#447EFC]">
                <CircleCheckBig />
              </div>
              <h5 className="demanzo-h2">{card.heading}</h5>
            </div>
            <p className="demanzo-p">{card.para}</p>
          </div>
        ))}
      </div>

      {/* Second row: 2 cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {pageData.card_details.slice(3, 5).map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="p-6 bg-white rounded-lg shadow-md text-left space-y-4 min-h-[200px]"
          >
            <div className="flex items-center space-x-2">
              <div className="text-[#447EFC]">
                <CircleCheckBig />
              </div>
              <h5 className="demanzo-h2">{card.heading}</h5>
            </div>
            <p className="demanzo-p">{card.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FiveFeatureSection;
