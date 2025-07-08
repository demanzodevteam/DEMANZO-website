// src/components/SecondSection.jsx

const Claim = ({pageData}) => {
  return (
    <section className="px-4 md:px-10 lg:px-20 my-10">
      <div className="bg-[#FEF2F2] rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 px-8 md:px-10 py-10 md:py-16 lg:mx-16">
        <h1 className="text-[24px] md:text-[28px] lg:text-[38px] font-semibold max-w-xl">
          {pageData.headings[0]} <br></br>
          {pageData.headings[1]} {pageData.headings[2]}
        </h1>
        <button
          type="submit"
          className="text-white bg-[#0A6AAD] px-6 py-3 rounded-full w-full sm:w-auto"
        >
          {pageData.paragraphs}
        </button>
      </div>
    </section>
  );
};

export default Claim;
