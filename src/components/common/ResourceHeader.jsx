import curveImg from "../../assets/Curve-main-bg.webp";
import { MEDIA_URL } from "../../config/urls";


export default function ResourceHeader({ pageData }) {
    return (<>
        <div className="bg-[#e6f8ff] px-[15px] py-[90px] relative">
    <div className="relative mx-auto lg:mx-[260px] text-center flex items-center justify-center">
        <div className="flex flex-col">
            <h1 className="text-[45px] md:text-[50px] font-semibold relative z-10">
                {pageData.headings[0]}
            </h1>
            <h1 className="text-[45px] md:text-[50px] font-semibold relative z-10">
                {pageData.headings[1]}
            </h1>
        </div>
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
        className="absolute bottom-16 left-30 hidden lg:block"
    />
</div>

    </>)
}