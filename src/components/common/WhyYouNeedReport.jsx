import React from 'react'
import { motion } from "framer-motion";
import { MEDIA_URL } from '../../config/urls';

export default function WhyYouNeedReport({pageData}) {
    return (
      <div>
        <h2 className="demanzo-h1 text-center !text-transparent !bg-clip-text !bg-gradient-to-r !from-black to-red-500 text-4xl">
          {pageData.title}
        </h2>

        <div
          className={`flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 lg:my-10 gap-10 ${pageData.background}`}
        >
          <div className="w-full md:w-full lg:w-1/2 p-4 md:mx-2 order-2 lg:order-1 flex justify-center">
            <img
              src={
                pageData?.images?.[0]?.src
                  ? MEDIA_URL + pageData.images[0].src
                  : "https://demanzo.com/wp-content/uploads/2022/09/meeting-2.webp"
              }
              alt="People discussing"
              className={`w-full h-auto rounded-lg transition duration-300 hover:-translate-y-4 ${pageData.customImageClass}`}
            />
          </div>

          <div className="w-full lg:w-1/2 p-4 md:mx-2 order-1 lg:order-2 text-left">
            <h2 className="mb-8 demanzo-h1">
              <span>{pageData.headings?.[0]}</span>
            </h2>

            <ul className="space-y-4">
              {pageData?.list_items?.[0].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="border-2 border-dotted text-red-500 border-red-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 p-1.5">
                    {index + 1}
                  </div>
                  <p className="demanzo-p mb-3">
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
