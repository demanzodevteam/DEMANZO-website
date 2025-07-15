export default function WhyShouldDownload({ pageData }) {
    // console.log(pageData?.list_items, 'pagedata')
    return (
      <>
        <div className="mx-8 my-10 sm:mx-[60px] sm:my-[100px]">
          <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-pink-50 px-[40px]">
            <h1 className="demanzo-h1 text-center">
              {/* Who Should Download? */}
              {pageData?.headings[0]}
            </h1>

            <div className="w-full flex flex-col md:flex-row justify-center gap-4">
              <div className="md:w-1/2 flex flex-col gap-4">
                {pageData?.list_items[0]?.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center justify-evenly">
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="16"
                        height="16"
                        strokeWidth="2"
                        rx="2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 10l4 4 7-7"
                      />
                    </svg>
                    <span className="demanzo-p">{item.para}</span>
                  </div>
                ))}
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                {pageData?.list_items[0]?.slice(3, 5).map((item, index) => (
                  <div key={index} className="flex items-center justify-evenly">
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="16"
                        height="16"
                        strokeWidth="2"
                        rx="2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 10l4 4 7-7"
                      />
                    </svg>
                    <span className="demanzo-p">{item.para}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}