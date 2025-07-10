import React, { useEffect } from "react";

export const ArticleFooter = () => {

    useEffect(() => {
        console.log('test');
    })

    return (
        <>
            <section className="container mx-auto py-10">
                {/* tags row  */}
                <div class="border rounded-lg  mt-10 p-6 mx-auto">
                    <div class="flex justify-between items-center max-w-6xl mx-auto px-4">

                        <div class="flex items-center space-x-2">
                            <span class="text-sm font-semibold text-gray-700">Tags:</span>
                            <span class="inline-block text-xs font-semibold text-white uppercase px-3 py-1 rounded-full bg-[linear-gradient(to_right,_#ff8c00,_#f12500)]">
                                SEO
                            </span>
                        </div>

                        <div class="flex space-x-4 text-black text-lg">
                            <a href="#" class="hover:text-blue-600" aria-label="Facebook">f</a>
                            <a href="#" class="hover:text-blue-400" aria-label="Twitter">𝕏</a>
                            <a href="#" class="hover:text-blue-700" aria-label="LinkedIn">in</a>
                            <a href="#" class="hover:text-pink-600" aria-label="Instagram">@</a>
                        </div>

                    </div>
                </div>


                {/* about author row */}
                <div className="border rounded-lg p-6 mt-10 mx-auto">
                    <div class="flex items-center space-x-10">
                        <img
                            width="128"
                            height="128"
                            src="https://demanzo.com/wp-content/uploads/2025/01/Jude-Festus-D-New-150x150.png"
                            alt="Jude Festus"
                            class="rounded-full border w-[128px] h-[128px]"
                        />
                        <div>
                            <span class="font-semibold text-gray-900 py-5">Jude Festus / Author</span>
                            <p class="text-gray-800 leading-relaxed text-base">Jude Festus is an accomplished digital marketing and WordPress expert with over 18 years of professional experience. He is the founder of Demanzo, a results-driven digital marketing agency specializing in demand generation for B2B tech companies, hospitals, and SMBs. Under his leadership, Demanzo has become a trusted partner for businesses seeking growth through cutting-edge digital marketing strategies.</p>
                        </div>
                    </div>
                </div>


                {/* article navigation row */}
                <div class="border rounded-lg p-6 mt-10 mx-auto">
                    <div class="flex justify-between items-center max-w-6xl mx-auto px-4">

                        <a href="/previous-article-slug" class="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105">
                            <svg class="w-4 h-4 text-gray-600 group-hover:text-black" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            <div class="text-left">
                                <p class="text-sm text-gray-500 font-medium">Previous Article</p>
                                <p class="font-semibold text-gray-800 group-hover:text-black">
                                    Why Every Small Business Should
                                </p>
                            </div>
                        </a>

                        <a href="/next-article-slug" class="flex items-center space-x-3 group flex-row-reverse text-right transition-transform duration-200 hover:scale-105">
                            <svg class="w-4 h-4 text-gray-600 group-hover:text-black" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <div>
                                <p class="text-sm text-gray-500 font-medium">Next Article</p>
                                <p class="font-semibold text-gray-800 group-hover:text-black">
                                    Top Demand Generation Strategies For
                                </p>
                            </div>
                        </a>

                    </div>
                </div>


            </section>
        </>
    )
}