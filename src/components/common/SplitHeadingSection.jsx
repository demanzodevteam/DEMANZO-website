// src/components/HeroLogger.tsx
import curveImg from "../../assets/Curve-main-bg.webp";
import { MEDIA_URL } from "../../config/urls";

export default function SplitHeadingSection({ pageData }) {
  return (
    <>
      <div class={`grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] px-2 gap-4 lg:px-14 lg:py-10 min-h-[80vh] ${pageData.background}`}>
        <div className="flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0">
          <div className="relative w-full max-w-[600px]">
            {/* Back Card positioned to bottom-right */}
            <div className="absolute inset-0 h-[360px] bg-[#FF5F55] transform translate-x-12 translate-y-12 rounded-[30px] shadow-lg"></div>

            {/* Foreground Image */}
            <div className="relative z-10 flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0">
              <img
                src={MEDIA_URL + pageData.images?.[0]?.src}
                alt={pageData.images?.[0]?.alt || "Image"}
                className="w-[550px] h-[400px] object-cover md:mx-auto lg:mx-0 rounded-[30px]"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center gap-4 py-8 px-4 lg:px-15 lg:py-10">
          <h1 class="text-[#FF5F55] font-semibold text-[18px] lg:text-[20px]">
            {pageData.title}
          </h1>

          <div class="inline-block relative mx-auto lg:mx-0 ">
            <h1 class="text-[45px] md:text-[48px] lg:text-[48px] font-semibold relative z-10">
              {pageData.headings[0]}
            </h1>
          </div>
          {pageData?.paragraphs?.map((para, index) => (
            <p
              key={index}
              class="text-[16px] font-[500] text-[#616670] leading-6"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
