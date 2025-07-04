import React,{useEffect} from "react";
import { MEDIA_URL } from "../../config/urls";

const BusinessSection = ({ SectionData ,Background}) => {
  
  return (
    <section className="bg-gradient-to-b  px-4 md:px-10 lg:px-20 py-16 space-y-4 text-center">
      <div className="mt-14">
        <div className="inline-block relative mx-auto lg:mx-0 mb-20">
          <div className="relative inline-block my-0">
            <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-center">{SectionData.headings[0]} </h1>
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
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6">
          <div className="lg:p-5">
            <img src={MEDIA_URL+SectionData?.images	[0]?.src} alt={SectionData?.images[0]?.alt} className="" />
          </div>

          <div className="grid lg:grid-cols-1 gap-6 lg:px-10">
            {SectionData?.list_items[0]?.map((list, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-center p-3 bg-[#F8FDFF] rounded-lg shadow-md "
              >
                <div className="flex flex-row items-center justify-center px-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#447EFC]"
                    width="50"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <h2 className="text-[20px] font-semibold mb-2">
                    {list.heading}
                  </h2>
                </div>
                <p className="text-start text-[#616670] px-4">
                  {list.para}
                </p>
                {/* <hr className="border-t border-[#E0E0E0] w-full mb-6" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
