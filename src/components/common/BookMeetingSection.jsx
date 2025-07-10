import React from "react";
import BackGroundImg from "../../assets/Background-SEO-Traffic.jpg";

export default function BookMeetingSection({ pageData }) {

  return (
    <div
      className="flex items-center justify-center px-[15px] py-[80px] bg-cover bg-center"
      style={{ backgroundImage: `url('${BackGroundImg.src}')` }}
    >
      <div className="mx-[280px] mb-[20px]">
        <h1 className="pb-[25px] text-[40px] font-[600] relative z-10 text-white text-center leading-12">
          {pageData.headings[0]}
        </h1>
        <div className="relative text-center flex items-center justify-center">
          <h1 className="pb-[25px] text-[40px] font-[600] relative z-10 text-white leading-12">
            {pageData.headings[1]}
          </h1>
          <svg
            className="mt-2 mx-auto w-[200px] h-[20px] absolute bottom-5"
            viewBox="0 0 208 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12.668C43.9929 5.60812 154.854 -4.27568 204.045 12.668"
              stroke="#FEB906"
              strokeWidth="6"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-[#FFFFFF] text-[30px] font-medium mb-10 text-center">
            {pageData.paragraphs[0]}
          </p>
          <p className="text-[#FFFFFF] text-[30px] font-medium mb-10 text-center">
            {pageData.paragraphs[1]}
          </p>
          <ul className="flex flex-row items-center justify-center gap-5">
            {pageData?.list_items &&
              pageData?.list_items[0]?.map((data, index) => (
                <li key={index} className="flex flex-row justify-center">
                  <div
                    className="w-14 h-14"
                    dangerouslySetInnerHTML={{ __html: data.svg }}
                  />
                  <p className="text-[#FFFFFF] font-semibold ">{data?.heading}</p>
                </li>
              ))}
          </ul>
           <div className="col-span-1 lg:col-span-2 flex flex-col items-center gap-4">
            <button
              type="submit"
              className="lg:w-auto text-[#447EFC] text-[16px] bg-[#FFFF] font-medium px-6 py-3 rounded-full hover:cursor-pointer transition"
            >
             {pageData.paragraphs[2]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
