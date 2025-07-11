import React from 'react'
import { motion } from "framer-motion";
import { MEDIA_URL } from '../../config/urls';

export default function WhyYouNeedReport({pageData}) {

    // console.log(pageData?.list_items,'pagedata')

    return (
      <div>
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-black  to-red-500 text-4xl ">
          {pageData.title}
        </h2>

        <div
          className={`flex flex-col items-center justify-center p-4 lg:flex-row md:p-8 my-10 gap-10 ${pageData.background}`}
        >
          <div className="w-full p-4 md:w-1/2 flex justify-center">
            <img
              src={
                pageData?.images?.[0]?.src
                  ? MEDIA_URL + pageData.images[0].src
                  : "https://demanzo.com/wp-content/uploads/2022/09/meeting-2.webp"
              }
              alt="People discussing"
              className="w-full max-w-[450px] h-auto rounded-lg slide-in-left transition duration-300 hover:-translate-y-4 mx-auto"
            />
          </div>
          <div className="flex flex-col md:flex-col w-full p-4 rounded-lg md:w-1/2  md:p-4 ">
            <h2 className="mb-8 text-5xl font-semibold text-start ">
              <span>{pageData.headings?.[0]}</span>
            </h2>
            <ul className="space-y-4">
              {pageData?.list_items?.[0].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="border-2 border-dotted text-red-500 border-red-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 p-1.5">
                    {index + 1}
                  </div>
                  <p className="text-lg text-[#616670] mb-3">
                    <strong>{item?.heading}</strong> {item?.para}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
}
