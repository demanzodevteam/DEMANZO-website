export default function HowtogetReport({ pageData, colVal }) {
    // console.log(pageData, 'pagedata')
    return (
        <>
            <div className="flex flex-col items-center justify-center p-8">
                <h1 className="mb-8 text-4xl font-bold text-center text-[#54595F]">
                    How to Get Your Free Report?
                </h1>
                <div className={`grid grid-cols-1 lg:grid-cols-${colVal[2].value} gap-8 lg:px-30 mt-10`}>
                    {pageData?.list_items[0]?.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row bg-white md:gap-4 shadow-md rounded-xl px-8 py-8 md:py-10 flex flex-col items-center space-y-4 transition"
                        >
                            <div
                                className="w-14 h-14"
                                dangerouslySetInnerHTML={{ __html: card.svg }}
                            />
                            <p
                                className="text-gray-600 font-medium"
                                dangerouslySetInnerHTML={{ __html: card.para }}
                            />
                            {/* <hr className="w-full border-gray-200 mt-4" /> */}
                        </div>
                    ))}
                </div>

                {/* <div className="flex flex-wrap justify-center w-full max-w-4xl gap-4">
                    <div className="flex flex-col items-center w-full p-4 m-2 bg-white rounded-lg shadow-md md:w-1/4">
                        <div className="p-3 mb-4 bg-red-100 rounded-full">
                            <svg
                                className="w-8 h-8 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                            </svg>
                        </div>
                        <p className="text-center text-gray-600">
                            Enter your name & email in the form below.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-full p-4 m-2 bg-white rounded-lg shadow-md md:w-1/4">
                        <div className="p-3 mb-4 bg-yellow-100 rounded-full">
                            <svg
                                className="w-8 h-8 text-yellow-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                        <p className="text-center text-gray-600">
                            Click 'Download Now' to access the report instantly.
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-full p-4 m-2 bg-white rounded-lg shadow-md md:w-1/4">
                        <div className="p-3 mb-4 bg-green-100 rounded-full">
                            <svg
                                className="w-8 h-8 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                        </div>
                        <p className="text-center text-gray-600">
                            Implement data-backed strategies to improve your IT marketing
                            efforts!
                        </p>
                    </div>
                </div> */}
                <p className="mt-8 font-medium text-center text-gray-500">
                    <span>{pageData?.paragraphs[0]}</span>
                    <span>
                        - {pageData?.paragraphs[1]}!
                    </span>
                </p>
            </div>
        </>
    )
}