import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { API_URL, MEDIA_URL } from "../../../../config/urls";

export default function GridWithModalSlider() {
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [pageData, setPageData] = useState([]);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL + "blocks/188");
        const data = await res.json();
        const pageData  = data[2];
        const headings = pageData.headings.slice(1);
        setPageData(pageData);
        setHeadings(headings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const openModal = (index) => {
    setStartIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  if (!pageData || !pageData.images) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {headings.map((heading, index) => (
          <div
            key={index}
            className="px-[25px] pb-[50px]"
            onClick={() => openModal(index)}
          >
            <div className="relative w-fit mx-auto lg:mx-0 group cursor-pointer">
              <img
                src={MEDIA_URL + pageData.images[index]?.src}
                alt={pageData.images[index]?.alt}
                className="w-[500px]"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div>
                  <p className="text-[18px] font-[700] text-white">{heading}</p>
                  <p className="text-[11px] font-[500] text-white">
                    {pageData.paragraphs[index]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    {modalOpen && (
      <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-4">
        <button
          onClick={closeModal}
          className="absolute top-4 right-6 text-white text-3xl font-bold z-50  cursor-pointer"
        >
          &times;
        </button>

        <button
          id="custom-prev"
          className="absolute left-4 text-white text-4xl z-50 hover:scale-125 transition-transform cursor-pointer"
        >
          ❮
        </button>
        <button
          id="custom-next"
          className="absolute right-4 text-white text-4xl z-50 hover:scale-125 transition-transform cursor-pointer"
        >
          ❯
        </button>

        <Swiper
          initialSlide={startIndex}
          navigation={{
            prevEl: "#custom-prev",
            nextEl: "#custom-next",
          }}
          pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          loop={true}
          className="w-full max-w-5xl bg-transparent"
        >
          {pageData.images.map((img, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center !bg-transparent" >
               <div className="w-full h-[80vh] flex items-center justify-center overflow-hidden relative">
                <img
                  src={MEDIA_URL + img?.src}
                  alt={img?.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-fill"
                />
                <p className="text-white text-[16px] font-bold absolute bottom-0 text-left bg-black/90 w-full py-3 pl-4">
                  {headings[index]}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )}
    </>
  );
}
