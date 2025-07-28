import { useEffect } from "react";
import cs1 from "../../assets/cs1.webp";
import { BASE_URL } from "../../config/urls";

export default function CaseStudyCard({ categories }) {
  


  return (
    <>
    {Object.keys(categories)
  .filter((key) => !isNaN(key))
  .map((key, catIndex) => {
    const category = categories[key]; // the actual object
    return (
      <div className="demanzo-container-auto" key={catIndex}>
        {/* {category?.title && (
          <h2 className="demanzo-h1 text-center">
            {category.title}
          </h2>
        )} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-8">
          <a
            href={`/case-studies/${category.slug ?? category.link?.split('/').filter(Boolean).pop()}`}
            className="block w-full rounded h-[380px] relative hover:scale-105 transition-transform duration-500 group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-gradient-to-r from-[#ff9966]/40 to-[#ff5e62]/40 z-10 rounded transition-all duration-500"></div>
            <p className="absolute text-[20px] font-[600] text-white bottom-8 px-10 z-20">
              {category.title}
            </p>
            <img
              src={BASE_URL+ category.acf_fields?.featured_image?.url	|| cs1.src}
              alt={category.title}
              className="w-full h-full object-cover rounded z-0"
            />
          </a>
        </div>

        {(categories?.button === undefined ||
          categories?.button === "" ||
          categories?.button === "undefined") && (
          <div className="flex justify-center mt-6 md:mt-12">
            <a
              href={'/' + (category.slug ?? category.link?.split('/').filter(Boolean).pop())}
              className="bg-[#0a6aad] text-white rounded-full px-8 py-3 text-[17px] font-[400] hover:bg-[#085a93] transition-colors duration-300"
            >
              View All
            </a>
          </div>
        )}
      </div>
    );
  })}

    </>
  );
}
