// src/components/SecondSection.jsx

const DetailedListing = ({ pageData }) => {

  return (
    <section className={`${pageData.background} px-4 md:px-10 lg:px-20 text-center`}>

      <div className="inline-block relative mx-auto lg:mx-0 mb-10">
        <div className="relative inline-block">
          <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center lg:text-center">{pageData.headings[0]} </h1>
          <svg
            className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] lg:left-[140px] lg:translate-x-0 z-0"
            width="270"
            height="20"
            viewBox="0 0 270 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15C80 5 190 0 265 12"
              stroke="#7D80E6"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>


        </div>
      </div>


      <div className={`grid grid-cols-1 lg:grid-cols-${pageData?.colVal[1]?.value} gap-8 lg:px-30 mt-10`}>
        {pageData?.card_details?.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl flex flex-col items-center space-y-4 hover:shadow-lg transition p-10"
          >
            <div
              className="w-14 h-14"
              dangerouslySetInnerHTML={{ __html: card.svg }}
            />
            <h2 className="text-black-600 font-bold text-2xl text-left">{card?.heading}</h2>
            <p
              className="text-gray-600 font-medium text-left"
              dangerouslySetInnerHTML={{ __html: card.para[0] }}
            />
            <ul className="text-left text-gray-600 font-medium">
              {card?.list.map((listItem, index) => (
                <li key={index} className="list-disc">{listItem}</li>
              ))}
            </ul>

            <p
              className="text-gray-600 font-medium text-left"
              dangerouslySetInnerHTML={{ __html: card.para[1] }}
            />
            {/* <hr className="w-full border-gray-200 mt-4" /> */}
          </div>
        ))}
      </div>


    </section>
  );
};

export default DetailedListing;
