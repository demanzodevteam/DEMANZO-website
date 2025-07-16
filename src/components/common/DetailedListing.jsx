// src/components/SecondSection.jsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DetailedListing = ({ pageData }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures component renders only on client
    AOS.init({ once: false }); // optional config
  }, [isClient]);

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <section
      className={`${pageData.background} px-4 md:px-10 lg:px-20 lg:py-10 text-center`}
    >
      <div className="inline-block relative mx-auto lg:mx-0 mb-10">
        <div className="relative inline-block">
          <h1 className="demanzo-h1 leading-tight text-center lg:text-center">
            {pageData.headings[0]}{" "}
          </h1>
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

      <div
        className={`grid grid-cols-1 md:grid-cols-${pageData?.colVal[0]?.value} lg:grid-cols-${pageData?.colVal[1]?.value}  gap-8 lg:px-30 mt-10`}
      >
        {pageData?.card_details?.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl flex flex-col items-start space-y-4 hover:shadow-lg transition p-10"
            data-aos="zoom-in-up"
          >
            {card?.svg && (
              <div
                className="w-14 h-14 self-center"
                dangerouslySetInnerHTML={{ __html: card.svg }}
              />
            )}
            <h2 className="demanzo-h2 text-left">{card?.heading}</h2>
            <p
              className="demanzo-bold-p text-left"
              dangerouslySetInnerHTML={{ __html: card.para[0] }}
            />
            <ul className="text-left demanzo-bold-p">
              {card?.list.map((listItem, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#616670] text-[14px] text-lg leading-[1.5]">
                    ➤
                  </span>
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
            <p
              className="demanzo-bold-p text-left"
              dangerouslySetInnerHTML={{ __html: card.para[1] }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedListing;
