import curveImg from "../../assets/Curve-main-bg.webp";
import { MEDIA_URL } from "../../config/urls";


export default function ResourceHeader({ pageData }) {
    return (<>
        <div className="w-full flex flex-row items-center justify-center px-8 py-10 bg-[#E6F8FF]">
            <div >
                <img src={MEDIA_URL + pageData.images?.[0]?.src} alt={pageData.images?.[0]?.alt} />
            </div>
            <div class="inline-block relative mx-auto lg:mx-0">
                <div className="flex flex-col ">

                    <h1 class="text-[45px] md:text-[48px] lg:text-[50px] font-semibold relative z-10">
                        {pageData.headings[0]}
                    </h1>
                    <h1 class="text-[45px] md:text-[48px] lg:text-[50px] font-semibold relative z-10">
                        {pageData.headings[1]}
                    </h1>
                </div>
                <svg
                    class="absolute left-1/2 -translate-y-1/2 lg:left-30 lg:translate-x-0 bottom-0 z-0"
                    width="270"
                    height="20"
                    viewBox="0 0 270 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 15C80 5 190 0 265 12"
                        stroke="#FF5F55"
                        stroke-width="6"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
        </div>
    </>)
}