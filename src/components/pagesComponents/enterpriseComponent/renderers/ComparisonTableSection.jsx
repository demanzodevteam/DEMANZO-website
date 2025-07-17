import React from "react";

const ComparisonTableSection = ({
  title,
  tableHeadings,
  tableData,
  footerText,
}) => {
  return (
    <section className="bg-gradient-to-b from-[#FEFFFF] to-[#FEF2F2]">
      <div className="demanzo-container-auto px-4 md:px-6 lg:px-[var(--demanzo-section-spacing)] py-[var(--demanzo-section-spacing)] text-center my-20">
        <div className="inline-block relative mx-auto lg:mx-0 mb-10 px-4">
          <div className="relative inline-block">
            {title && (
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-tight">
                {title}
              </h2>
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
          </div>
        </div>

        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-20 py-6">
          <table className="w-full table-fixed border border-gray-300 text-left text-sm sm:text-base text-gray-700">
            <thead className="bg-gray-100 text-gray-900 uppercase">
              <tr>
                {tableHeadings.map((heading, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-300 px-2 sm:px-4 py-2 text-xs sm:text-sm"
                  >
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
                      className={`border border-gray-300 px-2 sm:px-4 py-2 text-[13px] sm:text-sm ${
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
            <h2 className="mt-8 text-[22px] sm:text-[26px] font-semibold">
              {footerText}
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
