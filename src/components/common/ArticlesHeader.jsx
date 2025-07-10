import React, { useEffect } from "react";

export const ArticlesHeader = ({ SectionData }) => {

    useEffect(() => {
        console.log(SectionData);
    });

    return (
        <>
            <section className="container mx-auto">
                <div class="px-4 py-24 relative">
                    <div class="relative mx-auto text-left flex items-center">
                        <h1 class="text-[45px] md:text-[50px] font-semibold relative z-10">
                            {SectionData?.title?.rendered}
                        </h1>
                    </div>

                    <div class="mt-10 flex flex-wrap gap-8">
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

                    </div>
                </div>
            </section>

        </>
    )
}
