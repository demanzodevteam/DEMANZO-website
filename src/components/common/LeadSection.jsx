// src/components/HeroLogger.tsx
import { useEffect } from "react";
import { MEDIA_URL } from "../../config/urls";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LeadSection({ pageData }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <div
        className={`grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] px-2 gap-2 lg:px-14 lg:py-10 bg-no-repeat bg-bottom bg-cover min-h-[80vh] ${pageData.background}`}
      >
        <div className="flex flex-col justify-center gap-2 py-8 px-4 lg:px-15 lg:py-10">
          <h1 className="demanzo-title">{pageData.title}</h1>

          <div className="inline-block relative mx-auto lg:mx-0">
            <h1 className="demanzo-h1">{pageData.headings[0]}</h1>
          </div>

          {pageData?.card_details?.map((para, index) => (
            <div key={index} className="mb-1">
              <h3 className="demanzo-bold-p mb-2">{para.heading}</h3>
              <p className="demanzo-bold-p leading-6">{para.para[0]}</p>
            </div>
          ))}

          {pageData?.card_details?.[1]?.list?.map((item, index) => (
            <div key={index} className="mb-1">
              <div className="flex items-start demanzo-bold-p">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ff5f55"
                    d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                  />
                </svg>
                <span>{item}</span>
              </div>
            </div>
          ))}

          {pageData?.card_details?.map((para, index) => (
            <div key={index} className="mb-1">
              <p className="demanzo-bold-p">{para.para[1]}</p>
            </div>
          ))}
        </div>

        <div
          className="relative flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0"
          data-aos="fade-up"
        >
          <div className="absolute w-[90%] max-w-[480px] h-[75%] max-h-[350px] bg-gray-100 rounded-3xl top-4 left-12 z-0"></div>
          <img
            src={MEDIA_URL + pageData.images?.[0]?.src}
            alt={pageData.images?.[0]?.alt}
            className="relative w-[95%] max-w-[500px] h-auto aspect-[5/4] object-cover rounded-3xl z-10 shadow-lg transition duration-300 hover:-translate-y-4"
          />
        </div>
      </div>
    </>
  );
}
