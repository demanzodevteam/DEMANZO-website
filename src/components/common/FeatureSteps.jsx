import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function FeatureSteps({ pageData, background }) {
 const [mounted, setMounted] = useState(false);
 
   useEffect(() => {
     setMounted(true);
     AOS.init();
   }, []);

  return (
    <div className={`bg-gradient-to-b ${background} demanzo-section`}>
      <section
        className={`demanzo-container-auto text-center`}
      >
        <div className="w-full flex justify-center mb-10">
          {pageData.headings[0] && (
            <div className="relative inline-block text-center">
              <h2 className="demanzo-h1 leading-tight">
                {pageData.headings[0]}
              </h2>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] z-0">
                <svg
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
          )}
        </div>
        {pageData?.headings?.[1] && (
          <p className="demanzo-bold-p max-w-4xl mx-auto text-center">
            {pageData.headings[1]}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {pageData?.card_details?.map((card_details, index) => (
            <div
              key={index}
              className="lg:p-4"
              {...(mounted ? { "data-aos": "fade-up" } : {})}
            >
              <div className="flex md:gap-3">
                <div
                  className="p-4"
                  dangerouslySetInnerHTML={{ __html: card_details.svg }}
                ></div>

                <div className="p-3 text-start space-y-4">
                  <h5 className="demanzo-h2">{card_details.heading}</h5>
                  {card_details.para?.map((pt, i) => (
                    <p key={i} className="demanzo-bold-p">
                      {pt}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
