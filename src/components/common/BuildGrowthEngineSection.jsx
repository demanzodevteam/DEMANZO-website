import GrowthEngineForm from "./GrowthEngineForm";

export default function BuildGrowthEngineSection({ pageData }) {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-4 gap-2 py-25 bg-[#E6F8FF] min-h-[80vh]"
      // style={{ backgroundImage: bgImg ? "none" : `url('${curveImg.src}')` }}
    >
      <div className="flex flex-col justify-center items-center gap-4 py-8 px-4 lg:px-15 lg:py-10">
        <h1 className="demanzo-title ">{pageData[0].title}</h1>

        <div className="inline-block relative mx-auto lg:mx-0 ">
          <h1 className="demanzo-h1 relative z-10">
            {pageData[0].headings[0]}
          </h1>
          <svg
            className="absolute left-1/2 -translate-x-1/2 lg:left-30 lg:translate-x-0 top-10 z-0"
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
        {pageData[0]?.paragraphs?.map((para, index) => (
          <p key={index} className="demanzo-bold-p">
            {para}
          </p>
        ))}
      </div>

      <GrowthEngineForm category={pageData[1]} />
    </div>
  );
}
