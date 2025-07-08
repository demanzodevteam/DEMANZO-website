
import { useState, useEffect } from "react";
import { API_URL, BASE_URL } from "../../config/urls";
// import axios from "axios";
import cs1 from '../../assets/cs1.webp';


export default function CaseStudyCard({ category }) {
  
    // const [category, setCategory] = useState({
    //     name: '',
    //     slug: '',
    //     description: '',
    //     button: '',
    //     posts: [],
    //     image: '',
    // });
    // useEffect(() => {
    //     axios.get(API_URL + 'category/7')
    //         .then((response) => {
    //             setCategory(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Failed to fetch category:', error);
    //         });
    // }, []);

    return (
        <>
            {category?.name !== '' && (
                <h2 className="text-center text-[30px] lg:text-[40px] font-[600] text-[#191d27] pt-10">
                    {category.name}
                </h2>
            )}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-8 py-10">
                {category.posts?.map((caseStudy, index) => (
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
            </div>

           {(
  category?.button === undefined ||
  category?.button === '' ||
  category?.button === 'undefined'
) && (
  <div className="flex justify-center">
    <a
      href={BASE_URL + category.slug}
      className="bg-[#0a6aad] text-white rounded-full px-8 py-3 text-[17px] font-[400] hover:bg-[#085a93] transition-colors duration-300"
    >
      View All
    </a>
  </div>
)}


        </>


    )
}
