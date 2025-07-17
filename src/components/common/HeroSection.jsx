import curveImg from "../../assets/Curve-main-bg.webp";
import { MEDIA_URL } from "../../config/urls";

export default function HeroSection({ pageData }) {
  console.log(pageData,'dsfgdsgdsfg');
  
  return (
    <>
      <div
        className="demanzo-container  lg:py-28 bg-no-repeat bg-bottom bg-cover "
        style={{
          backgroundImage: pageData?.bgImg ? "none" : `url('${curveImg.src}')`,
        }}
      >
        <div className="demanzo-grid demanzo-max-screen-width ">
          <div className="flex flex-col justify-center gap-4 py-8 px-4 lg:px-15 lg:py-10 text-center md:text-left">
            <h2 className="demanzo-title">{pageData.title}</h2>

            <div className="inline-block relative mx-auto lg:mx-0">
              <h1 className="demanzo-h1">{pageData.headings[0]}</h1>

              <svg
                className="absolute left-1/2 -translate-x-1/2 lg:left-30 lg:translate-x-0 bottom-20 z-0"
                width="270"
                height="20"
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

            {pageData?.paragraphs?.map((para, index) => (
              <p key={index} className="demanzo-bold-p">
                {para}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0">
            {pageData?.bgImg ? (
              <>
                <div className="w-full md:px-6">
                  <img
                    src={MEDIA_URL + pageData.images?.[0]?.src}
                    alt={pageData.images?.[0]?.alt}
                    className="w-full md:w-full lg:w-[500px] transition-transform duration-400 hover:-translate-y-4 rounded-sm"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-full md:px-6">
                  <img
                    src={MEDIA_URL + pageData.images?.[0]?.src}
                    alt={pageData.images?.[0]?.alt}
                    className="w-full md:w-full lg:w-[500px] transition-transform duration-400 hover:-translate-y-4 rounded-sm"
                  />
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-2 w-full flex flex-col lg:flex-row justify-center gap-4 px-15">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {pageData?.list_items[0]?.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-10"
                >
                  <div>
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l179.344-179.344c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216.004 308.672l-74.073-74.072c-6.248-6.248-16.379-6.248-22.627 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104.004 104.004c6.249 6.248 16.379 6.248 22.628.001z" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-[#54595f]">
                    <strong>{item.heading}</strong> - {item.para}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {pageData?.list_items[0]?.slice(3, 6).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-10"
                >
                  <div>
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l179.344-179.344c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216.004 308.672l-74.073-74.072c-6.248-6.248-16.379-6.248-22.627 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104.004 104.004c6.249 6.248 16.379 6.248 22.628.001z" />
                    </svg>
                  </div>
                  <span className="demanzo-bold-pdemanzo-bold-p text-[#54595f]">
                    <strong>{item.heading}</strong> - {item.para}
                  </span>
                </div>
              ))}
            </div>
          </div>
<div className="col-span-2 flex items-center justify-center">

             <a
                className="w-full lg:w-auto text-white bg-[#0A6AAD] px-6 py-3 rounded-full mt-8"
                href="#itmarket-form"
              >
                {pageData.headings[1]}
              </a>
</div>
        </div>
      </div>
    </>
  );
}
