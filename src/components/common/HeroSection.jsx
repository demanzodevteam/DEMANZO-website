// src/components/HeroLogger.tsx
import curveImg from "../../assets/Curve-main-bg.webp";
import { MEDIA_URL } from "../../config/urls";

export default function HeroSection({ pageData }) {
  
  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-2 gap-2 lg:px-14 lg:py-10 bg-no-repeat bg-bottom bg-cover min-h-[80vh]"
        style={{
          backgroundImage: pageData?.bgImg ? "none" : `url('${curveImg.src}')`,
        }}
      >
        <div className="flex flex-col justify-center gap-4 py-8 px-4 lg:px-15 lg:py-10 text-center md:text-left">
          <h1 className="text-[#FF5F55] font-semibold text-[18px] lg:text-[20px]">
            {pageData.title}
          </h1>

          <div className="inline-block relative mx-auto lg:mx-0">
            <h1 className="text-[45px] md:text-[48px] lg:text-[50px] font-semibold relative z-10">
              {pageData.headings[0]}
            </h1>
            <svg
              className="absolute left-1/2 -translate-x-1/2 lg:left-30 lg:translate-x-0 bottom-20 z-0"
              width="270"
              height="20"
              viewBox="0 0 270 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15C80 5 190 0 265 12"
                stroke="#FF5F55"
                stroke-width="6"
                stroke-linecap="round"
              />
            </svg>
          </div>

          {pageData?.paragraphs?.map((para, index) => (
            <p
              key={index}
              className="text-[16px] font-[500] text-[#616670] leading-6"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0">
          {pageData?.bgImg ? (
            <>
              <div className="w-full md:px-6">
                <img
                  src={MEDIA_URL + pageData.images?.[0]?.src}
                  alt={pageData.images?.[0]?.alt}
                  className="w-full md:w-full lg:w-[500px] transition-transform duration-400 hover:-translate-y-4 rounded-sm"
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:px-6">
                <img
                  src={MEDIA_URL + pageData.images?.[0]?.src}
                  alt={pageData.images?.[0]?.alt}
                  className="w-full md:w-full lg:w-[500px] transition-transform duration-400 hover:-translate-y-4 rounded-sm"
                />
              </div>
            </>
          )}
        </div>

        <div className="lg:col-span-2 w-full flex flex-row justify-center gap-4 px-15">
          <div className="w-1/2 flex flex-col gap-4">
            {pageData?.list_items[0]?.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-10"
              >
                <svg
                  className="w-5 h-5 mr-2 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12l3 3 5-5"
                  />
                </svg>
                <span className="text-[15px] text-[#54595f]">{item.para}</span>
              </div>
            ))}
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            {pageData?.list_items[0]?.slice(3, 6).map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-10"
              >
                <svg
                  className="w-5 h-5 mr-2 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12l3 3 5-5"
                  />
                </svg>
                <span className="text-[15px] text-[#54595f]">{item.para}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
