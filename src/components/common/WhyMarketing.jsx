// src/components/HeroLogger.tsx
import { MEDIA_URL } from "../../config/urls";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function WhyMarketing({ pageData }) {
    // const [pageData, setPageData] = useState({});
    useEffect(()=>{
        AOS.init();
    })


    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-2 gap-2 lg:px-14 lg:py-10 bg-no-repeat bg-bottom bg-cover min-h-[80vh]">
          <div className="flex flex-col justify-center gap-4 py-8 px-4 lg:px-15 lg:py-10">
            <h1 className="text-[#FF5F55] font-semibold text-[18px] lg:text-[20px]">
              {pageData.title}
            </h1>

            <div className="inline-block relative mx-auto lg:mx-0">
              <h1 className="text-[45px] md:text-[48px] lg:text-[50px] font-semibold relative z-10">
                {pageData.headings[0]}
              </h1>
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

          <div
            className="relative flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0"
            data-aos="fade-up"
          >
            {/* Back gray card */}
            <div className="absolute w-[350px] md:w-[90%] lg:w-[500px] h-[300px] bg-gray-100 rounded-3xl top-6 left-6 z-0"></div>

            {/* Foreground image */}
            <img
              src={MEDIA_URL + pageData.images?.[0]?.src}
              alt={pageData.images?.[0]?.alt}
              className="relative w-[350px] md:w-[90%] lg:w-[500px] h-[330px] object-cover rounded-3xl z-10 shadow-lg"
            />
          </div>
        </div>
      </>
    );
}


