// // src/components/SecondSection.jsx
// import React from "react";

// const SecondSection = ({ title, description, cards = [] ,bgClass = "bg-white" ,colVal="3" }) => {
//   return (
//     <section className={`${bgClass} px-4 md:px-10 lg:px-20 py-16 text-center`}>
//       <div className="inline-block relative mx-auto lg:mx-0 mb-10">
//         <div className="relative inline-block">
//           <h1
//             className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-center"
//             dangerouslySetInnerHTML={{ __html: title }}
//           />
//           <svg
//             className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] lg:left-[140px] lg:translate-x-0 z-0"
//             width="270"
//             height="20"
//             viewBox="0 0 270 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5 15C80 5 190 0 265 12"
//               stroke="#7D80E6"
//               strokeWidth="6"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>
//       </div>

//       <div className={`grid grid-cols-1 lg:grid-cols-${colVal} gap-8 lg:px-30 mt-10`}>
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition"
//           >
//             <div
//               className="w-14 h-14"
//               dangerouslySetInnerHTML={{ __html: card.icon }}
//             />
//             <p
//               className="text-gray-600 font-medium"
//               dangerouslySetInnerHTML={{ __html: card.text }}
//             />
//             <hr className="w-full border-gray-200 mt-4" />
//           </div>
//         ))}
//       </div>

//       <p className="mt-12 text-gray-600 font-medium max-w-7xl mx-auto text-[16px] leading-relaxed">
//         {description}
//       </p>
//     </section>
//   );
// };

// export default SecondSection;



// src/components/HeroLogger.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../config/urls";


export default function HeroPiplineSection({ slug,bgClass = "bg-white", colVal = "3" }) {
  const [pageData, setPageData] = useState({});
  useEffect(() => {
    axios
      .get(`${API_URL}${slug}`)
      .then((res) => {
        setPageData(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        console.error("Error in browser:", err);
      });
  }, []);

  return (
    <>
      <section
        className={`${bgClass} px-4 md:px-10 lg:px-20 py-16 text-center`}
      >
        <div className="inline-block relative mx-auto lg:mx-0 mb-10">
          <div className="relative inline-block">
            <h1
              className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-center max-w-2xl">{pageData.title}</h1>             <svg
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

        {/* <div
          className={`grid grid-cols-1 lg:grid-cols-${colVal} gap-8 lg:px-30 mt-10`}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition"
            >
              <div
                className="w-14 h-14"
                dangerouslySetInnerHTML={{ __html: card.icon }}
              />
              <p
                className="text-gray-600 font-medium"
                dangerouslySetInnerHTML={{ __html: card.text }}
              />
              <hr className="w-full border-gray-200 mt-4" />
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-600 font-medium max-w-7xl mx-auto text-[16px] leading-relaxed">
          {description}
        </p> */}
      </section>
    </>
  );
}
