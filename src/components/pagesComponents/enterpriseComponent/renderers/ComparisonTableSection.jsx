import React from "react";

const ComparisonTableSection = ({
  title,
  subtitle,
  tableHeadings,
  tableData,
  footerText,
}) => {
  return (
    <section className=" bg-gradient-to-b from-[#FEFFFF] to-[#FEF2F2] px-4 md:px-10 lg:px-[var(--demanzo-section-spacing)] py-[var(--demanzo-section-spacing)] text-center my-20">
      <div className="inline-block relative mx-auto lg:mx-0 mb-10 px-10">
        <div className="relative inline-block">
          {title && (
            <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center">
              {title}
            </h1>
          )}
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
          {subtitle && (
            <h1 className="text-[45px] md:text-[48px] lg:text-[45px] font-semibold relative z-10 leading-tight text-center">
              {subtitle}
            </h1>
          )}
        </div>
      </div>

      <div className="px-4 md:px-20 lg:px-40 py-12 mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 text-left text-base text-gray-700">
            <thead className="bg-gray-100 text-gray-900 uppercase">
              <tr>
                {tableHeadings.map((heading, idx) => (
                  <th key={idx} className="border border-gray-300 px-6 py-4">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border border-gray-300 px-6 py-4 ${
                        j === 0 ? "font-medium" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {footerText && (
            <h1 className="mt-8 text-[30px] font-semibold">{footerText}</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
