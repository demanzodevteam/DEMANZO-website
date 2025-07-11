// src/components/SeoResultsSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const seoData = [
  {
    client: "Endocrinologist in Abu Dhabi",
    keywords: [
      { keyword: "Best Thyroid Doctor in Abu Dhabi", position: 4 },
      { keyword: "Best Endocrinologist in Abu Dhabi", position: 4 },
      { keyword: "Thyroid Doctor Abu Dhabi", position: 5 },
      { keyword: "Endocrinologist in Abu Dhabi", position: 9 },
    ],
  },
  {
    client: "Garden Kit Supplier in Bangalore",
    keywords: [
      { keyword: "Online Garden Store Bangalore", position: 1 },
      { keyword: "Garden Store Bangalore", position: 6 },
      { keyword: "Grow Bags Online Bangalore", position: 1 },
      { keyword: "Garden Shops in Bangalore", position: 1 },
      { keyword: "Garden supplies in Bangalore", position: 1 },
      { keyword: "Terrace Vegetable Garden", position: 2 },
    ],
  },
  // Add more slides if needed
];

const SeoResultsSlider = () => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-20 bg-white">
      <div className="mb-6 inline-flex items-center gap-2 bg-[#f1f5ff] text-[#0a58ca] px-4 py-1 rounded-full text-sm font-medium">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
        </svg>
        SEO Results
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {seoData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full max-w-4xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-[#191d27] mb-6 border-b border-gray-300 inline-block pb-2">
                Client: {item.client}
              </h3>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border border-collapse">
                  <thead>
                    <tr className="bg-[#007bff] text-white">
                      <th className="py-3 px-4 text-left">Ranking Keywords</th>
                      <th className="py-3 px-4 text-left">Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.keywords.map((row, i) => (
                      <tr key={i} className="odd:bg-white even:bg-gray-50">
                        <td className="py-3 px-4 border-b">{row.keyword}</td>
                        <td className="py-3 px-4 border-b">{row.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SeoResultsSlider;
