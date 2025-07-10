import React, { useEffect } from "react";

export const ArticlesHeader = ({ SectionData }) => {

    useEffect(() => {
        console.log(SectionData);
    });

    return (
        <>
            <section className="container mx-auto my-10">
                <div class="px-4 py-25` relative">
                    <span
                        className="inline-block text-xs font-semibold text-white uppercase px-3 py-2.5 my-4 rounded-full bg-[linear-gradient(to_right,_#ff8c00,_#f12500)]"
                    >
                        {SectionData?.title?.rendered}
                    </span>
                    <div class="relative mx-auto text-left flex items-center">
                        <h1 class="text-[45px] md:text-[50px] font-semibold relative z-10">
                            {SectionData?.title?.rendered}
                        </h1>
                    </div>

                    <div class="mt-5 flex flex-wrap gap-8">
                        <div class="flex items-center space-x-4">
                            <img
                                width="62"
                                height="62"
                                src="https://demanzo.com/wp-content/uploads/2025/01/Jude-Festus-D-New-150x150.png"
                                alt="Jude Festus"
                                class="rounded-full border w-[62px] h-[62px]"
                            />
                            <div>
                                <span class="font-semibold text-gray-900">Jude Festus</span>
                                <p class="text-sm text-gray-600">Author</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8263 3.28809H2.88559C2.38584 3.28921 1.90688 3.48823 1.55351 3.8416C1.20013 4.19498 1.00112 4.67393 1 5.17368V19.1144C1.00112 19.6141 1.20013 20.0931 1.55351 20.4464C1.90688 20.7998 2.38584 20.9988 2.88559 21H16.8263C17.326 20.9988 17.805 20.7998 18.1584 20.4464C18.5117 20.0931 18.7107 19.6141 18.7119 19.1144V5.17368C18.7107 4.67393 18.5117 4.19498 18.1584 3.8416C17.805 3.48823 17.326 3.28921 16.8263 3.28809V3.28809Z" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>
                                <path d="M4.79199 9.51685H9.28352" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>
                                <path d="M4.79199 13.394H14.5166" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>
                                <path d="M7.12305 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>
                                <path d="M12.5889 1V5.15254" stroke="#7347FC" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path>
                            </svg>
                            <div>
                                <span class="font-semibold text-gray-900">{new Date(SectionData?.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}</span>
                                <p class="text-sm text-gray-600">Published</p>
                            </div>
                        </div>



                        <div class="flex items-center space-x-4">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.48597 0 0 4.48597 0 10C0 15.5141 4.48597 20 10 20C15.5141 20 20.0001 15.514 20.0001 10C20.0001 4.48604 15.514 0 10 0ZM10 19.0032C5.03557 19.0032 0.996721 14.9644 0.996721 10C0.996721 5.03563 5.03557 0.996721 10 0.996721C14.9645 0.996721 19.0033 5.03557 19.0033 9.99997C19.0033 14.9644 14.9644 19.0032 10 19.0032Z" fill="#7347FC"></path>
                                <path d="M9.50204 9.50157H5.52539V10.4983H10.4988V2.91577H9.50204V9.50157Z" fill="#7347FC"></path>
                            </svg>
                            <div>
                                <p class="text-sm text-gray-600">Reading</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
