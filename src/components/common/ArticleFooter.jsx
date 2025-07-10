import React, { useEffect, useMemo } from "react";

export const ArticleFooter = ({ posts, currentSlug }) => {
    // Safely compute current, previous and next posts
    const { previous, next } = useMemo(() => {
        const index = posts.findIndex(p => p.slug === currentSlug);
        return {
            previous: posts[index + 1] || null,
            next: posts[index - 1] || null,
        };
    }, [posts, currentSlug]);

    // Scroll into view logic if needed (optional)
    useEffect(() => {
        const currentElement = document.getElementById(currentSlug);
        if (currentElement) {
            currentElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [currentSlug]);

    return (
        <section className="container mx-auto py-10">

            {/* Tags Row */}
            <div className="border rounded-lg mt-10 p-6 mx-auto">
                <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-gray-700">Tags:</span>
                        {posts[0].class_list
                            ?.filter((cls) => cls.startsWith("tag-"))
                            .map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block text-xs font-semibold text-white uppercase px-3 py-1 rounded-full bg-[linear-gradient(to_right,_#ff8c00,_#f12500)]"
                                >
                                    {tag.replace("tag-", "")}
                                </span>
                            ))}

                    </div>

                    <div className="flex space-x-4 text-black text-lg">
                        <a href="#" className="hover:text-blue-600" aria-label="Facebook">f</a>
                        <a href="#" className="hover:text-blue-400" aria-label="Twitter">𝕏</a>
                        <a href="#" className="hover:text-blue-700" aria-label="LinkedIn">in</a>
                        <a href="#" className="hover:text-pink-600" aria-label="Instagram">@</a>
                    </div>
                </div>
            </div>

            {/* Author Section */}
            <div className="border rounded-lg p-6 mt-10 mx-auto">
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        <img
            width="128"
            height="128"
            src="https://demanzo.com/wp-content/uploads/2025/01/Jude-Festus-D-New-150x150.png"
            alt="Jude Festus"
            className="rounded-full border w-[128px] h-[128px]"
        />
        <div className="text-center md:text-left">
            <span className="block font-semibold text-gray-900 mb-2">Jude Festus / Author</span>
            <p className="text-gray-800 leading-relaxed text-base">
                Jude Festus is an accomplished digital marketing and WordPress expert with over 18 years of professional experience. He is the founder of Demanzo, a results-driven digital marketing agency specializing in demand generation for B2B tech companies, hospitals, and SMBs.
            </p>
        </div>
    </div>
</div>


            {/* Navigation Section */}
           {(previous || next) && (
  <div className="border rounded-lg p-6 mt-10 mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-stretch max-w-6xl mx-auto px-4 space-y-4 md:space-y-0 md:space-x-10">

      {previous && (
        <a
          href={`/${previous.slug}`}
          className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105 flex-1 min-h-[140px] border rounded-md p-4"
        >
          <svg className="w-4 h-4 text-gray-600 group-hover:text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-left">
            <p className="text-sm text-gray-500 font-medium">Previous Article</p>
            <p className="font-semibold text-gray-800 group-hover:text-black line-clamp-2">
              {previous.title?.rendered || previous.slug}
            </p>
          </div>
        </a>
      )}

      {next && (
        <a
          href={`/${next.slug}`}
          className="flex items-center space-x-3 group flex-row-reverse text-right transition-transform duration-200 hover:scale-105 flex-1 min-h-[140px] border rounded-md p-4"
        >
          <svg className="w-4 h-4 text-gray-600 group-hover:text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <div className="text-right">
            <p className="text-sm text-gray-500 font-medium">Next Article</p>
            <p className="font-semibold text-gray-800 group-hover:text-black line-clamp-2">
              {next.title?.rendered || next.slug}
            </p>
          </div>
        </a>
      )}

    </div>
  </div>
)}


        </section>
    );
};
