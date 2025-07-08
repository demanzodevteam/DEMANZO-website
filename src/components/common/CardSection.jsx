import React, { useEffect } from "react";
import { MEDIA_URL } from "../../config/urls";
import cs1 from '../../assets/cs1.webp';


const CardSection = ({ pageData }) => {
    
    return (
        <>
            <div className="bg-[#e6f8ff] px-[15px] py-[90px] relative">
                <div className="relative mx-auto lg:mx-0 text-center flex items-center justify-center">
                    <h1 className="text-[45px] md:text-[50px] font-semibold relative z-10">
                        {pageData.name}<br></br>
                    </h1>
                    <svg
                        className="mt-2 mx-auto w-[270px] h-[20px] absolute bottom-0"
                        viewBox="0 0 270 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 15C80 5 190 0 265 12"
                            stroke="#FF5F55"
                            strokeWidth="6"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <img
                    src={MEDIA_URL + pageData.images?.[0]?.src}
                    alt={pageData.images?.[0]?.alt}
                    class="absolute bottom-0 left-40 hidden lg:block"
                />
            </div>

        
 {/* <CaseStudyCard category={pageData} /> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-8 py-10">
                {pageData.posts?.map((caseStudy, index) => (
                    <div
                        key={index}
                        className="w-full rounded h-[380px] relative hover:scale-105 transition-transform duration-500 group cursor-pointer overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-gradient-to-r from-[#ff9966]/40 to-[#ff5e62]/40 z-10 rounded transition-all duration-500"></div>
                        <p className="absolute text-[20px] font-[600] text-white bottom-8 px-10 z-20">
                            {caseStudy.title}
                        </p>
                        <img
                            src={cs1.src}
                            alt={caseStudy.title}
                            className="w-full h-full object-cover rounded z-0"
                        />
                    </div>
                ))}
            </div> */}

            {/* {(
                pageData?.button === undefined ||
                pageData?.button === '' ||
                pageData?.button === 'undefined'
            ) && (
                    <div className="flex justify-center">
                        <a
                            href={BASE_URL + pageData.slug}
                            className="bg-[#0a6aad] text-white rounded-full px-8 py-3 text-[17px] font-[400] hover:bg-[#085a93] transition-colors duration-300"
                        >
                            View All
                        </a>
                    </div>
                )} */}
        </>
    );
};

export default CardSection;
