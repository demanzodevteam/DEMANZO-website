// src/components/HeroLogger.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../config/urls';

export default function HeroSection() {

    const [pageData, setPageData] = useState({})
    useEffect(() => {
        axios.get(API_URL + 'home-hero')
            .then((res) => {
                setPageData(res.data);
                // console.log(res.data)
            })
            .catch((err) => {
                console.error('Error in browser:', err);
            });
    }, []);

    return (
        <>
            <div class="flex flex-col justify-center gap-4 py-8 lg:py-16">
                <p class="text-[30px] md:text-[40px] font-[600] text-[#191d27]">{pageData.title}</p>
                <p class="text-[16px] font-[500] text-[#616670]">{pageData.content}</p>
                {/* <a href={pageData.link} class="bg-[#2d89bf] text-white rounded-full px-6 py-4 md:mt-6 text-[15px] font-[500] w-fit">{pageData.button}</a> */}
                <a
  href={pageData.link}
  className="bg-[#2d89bf] text-white rounded-full px-6 py-4 md:mt-6 text-[15px] font-[500] w-fit
             transition-transform duration-300 ease-in-out
             hover:scale-105 hover:shadow-[0_0_20px_#2d89bf]"
>
  {pageData.button}
</a>
            </div>
        </>
    );
}
