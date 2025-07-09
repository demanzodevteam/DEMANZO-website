// src/components/SecondSection.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoCardGrid = ({ pageData }) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section
      className={`${pageData.background} px-4 md:px-10 lg:px-20 text-center py-20`}
    >
      <div className="inline-block relative mx-auto lg:mx-0 mb-10">
        <div className="relative inline-block">
          <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-center">
            {pageData.headings[0]}{" "}
          </h1>
        </div>
      </div>

     {/* First row: first 3 cards */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-20 mt-10">
  {pageData?.card_details?.slice(0, 3).map((card, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-xl flex flex-col items-center space-y-4 hover:shadow-lg transition p-6"
      data-aos="zoom-in-up"
    >
      <div
        className="w-14 h-14"
        dangerouslySetInnerHTML={{ __html: card.svg }}
      />
      <div className="w-full text-left">
        <h2 className="text-black font-bold text-[20px]">{card?.heading}</h2>
      </div>
      <p
        className="text-gray-600 font-medium text-left text-[16px]"
        dangerouslySetInnerHTML={{ __html: card.para[0] }}
      />
      <ul className="text-left text-gray-600 font-medium">
        {card?.list.map((listItem, idx) => (
          <li key={idx} className="list-disc">{listItem}</li>
        ))}
      </ul>
      <p
        className="text-gray-600 font-medium text-left"
        dangerouslySetInnerHTML={{ __html: card.para[1] }}
      />
    </div>
  ))}
</div>

{/* Second row: center 4th card */}
{pageData?.card_details?.[3] && (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-20 mt-10">
    <div className="lg:col-start-2">
      <div
        className="bg-white shadow-md rounded-xl flex flex-col items-center space-y-4 hover:shadow-lg transition p-6"
        data-aos="zoom-in-up"
      >
        <div
          className="w-14 h-14"
          dangerouslySetInnerHTML={{ __html: pageData.card_details[3].svg }}
        />
        <div className="w-full text-left">
          <h2 className="text-black font-bold text-[20px]">
            {pageData.card_details[3]?.heading}
          </h2>
        </div>
        <p
          className="text-gray-600 font-medium text-left text-[16px]"
          dangerouslySetInnerHTML={{ __html: pageData.card_details[3]?.para[0] }}
        />
        <ul className="text-left text-gray-600 font-medium">
          {pageData.card_details[3]?.list.map((listItem, idx) => (
            <li key={idx} className="list-disc">{listItem}</li>
          ))}
        </ul>
        <p
          className="text-gray-600 font-medium text-left"
          dangerouslySetInnerHTML={{ __html: pageData.card_details[3]?.para[1] }}
        />
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default InfoCardGrid;

{
  /* First row: first 3 cards */
}
{/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-20 mt-10">
  {pageData?.card_details?.slice(0, 3).map((card, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-xl flex flex-col items-center space-y-4 hover:shadow-lg transition p-6"
      data-aos="zoom-in-up"
    >
      <div
        className="w-14 h-14"
        dangerouslySetInnerHTML={{ __html: card.svg }}
      />
      <div className="w-full text-left">
        <h2 className="text-black font-bold text-[20px]">{card?.heading}</h2>
      </div>
      <p
        className="text-gray-600 font-medium text-left text-[16px]"
        dangerouslySetInnerHTML={{ __html: card.para[0] }}
      />
      <ul className="text-left text-gray-600 font-medium">
        {card?.list.map((listItem, idx) => (
          <li key={idx} className="list-disc">
            {listItem}
          </li>
        ))}
      </ul>
      <p
        className="text-gray-600 font-medium text-left"
        dangerouslySetInnerHTML={{ __html: card.para[1] }}
      />
    </div>
  ))}
</div>; */}

{
  /* Second row: center 4th card */
}
// {
//   pageData?.card_details?.[3] && (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-20 mt-10">
//       <div className="lg:col-start-2">
//         <div
//           className="bg-white shadow-md rounded-xl flex flex-col items-center space-y-4 hover:shadow-lg transition p-6"
//           data-aos="zoom-in-up"
//         >
//           <div
//             className="w-14 h-14"
//             dangerouslySetInnerHTML={{
//               __html: pageData.card_details[3].svg,
//             }}
//           />
//           <div className="w-full text-left">
//             <h2 className="text-black font-bold text-[20px]">
//               {pageData.card_details[3]?.heading}
//             </h2>
//           </div>
//           <p
//             className="text-gray-600 font-medium text-left text-[16px]"
//             dangerouslySetInnerHTML={{
//               __html: pageData.card_details[3]?.para[0],
//             }}
//           />
//           <ul className="text-left text-gray-600 font-medium">
//             {pageData.card_details[3]?.list.map((listItem, idx) => (
//               <li key={idx} className="list-disc">
//                 {listItem}
//               </li>
//             ))}
//           </ul>
//           <p
//             className="text-gray-600 font-medium text-left"
//             dangerouslySetInnerHTML={{
//               __html: pageData.card_details[3]?.para[1],
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }