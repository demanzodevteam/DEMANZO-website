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
    <section
      className={`bg-gradient-to-b ${background} px-4 md:px-10 lg:px-20 py-16 space-y-4 text-center`}
    >
      <div className="w-full flex justify-center mb-10">
        <div className="relative inline-block text-center">
          <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight">
            {pageData.headings[0]}
          </h1>

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
      </div>
      {pageData?.headings?.[1] && (
        <p className="text-[16px] text-[#616670] font-semibold max-w-4xl mx-auto text-center">
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

              <div className="p-3 text-start space-y-6">
                <h1 className="text-[20px] font-bold">
                  {card_details.heading}
                </h1>
                {card_details.para?.map((pt, i) => (
                  <p
                    key={i}
                    className="text-[16px] font-semibold text-[#616670]"
                  >
                    {pt}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import React from "react";

// export default function FeatureSteps({pageData,background}) {
//   return (
//     <section
//       className={`bg-gradient-to-b ${background} px-4 md:px-10 lg:px-20 py-16 space-y-4 text-center`}
//     >
//       <div className="grid md:grid-cols-2 gap-4">
//         {steps.map((step, index) => (
//           <div key={index} className="lg:p-4">
//             <div className="flex md:gap-3">
//               <div
//                 className="p-4"
//                 dangerouslySetInnerHTML={{ __html: step.icon }}
//               />
//               <div className="p-3 text-start space-y-6">
//                 <h1 className="text-[20px] font-bold">{step.title}</h1>
//                 {step.points.map((pt, i) => (
//                   <p
//                     key={i}
//                     className="text-[16px] font-semibold text-[#616670]"
//                   >
//                     {pt}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from "react";

// export default function FeatureSteps({
//   steps = [],
//   background = "from-[#FBFEFF] to-[#FEF2F2]",
// }) {
//   return (
//     <section
//       className={`bg-gradient-to-b ${background} px-4 md:px-10 lg:px-20 py-16 space-y-4 text-center`}
//     >
//       <div className="grid md:grid-cols-2 gap-4">
//         {steps.map((step, index) => (
//           <div key={index} className="lg:p-4">
//             <div className="flex md:gap-3">
//               <div className="p-4">
//                 {step.icon || typeof step.icon === "object" ? step.icon : null}
//               </div>
//               <div className="p-3 text-start space-y-6">
//                 <h1 className="text-[20px] font-bold">{step.title}</h1>
//                 {step.points.map((pt, i) => (
//                   <p
//                     key={i}
//                     className="text-[16px] font-semibold text-[#616670]"
//                   >
//                     {pt}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }