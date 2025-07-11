import React from "react";

const CaseStudyForm = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div>
          <h4 className="text-red-500 text-sm font-semibold mb-2">SEO Success Story</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            How An IoT Service Provider Boosted Search Traffic By 613%
          </h2>
          <p className="text-gray-700 mb-6">
            In this case study we have described how we have helped an IoT development
            company to increase their search traffic by 613%. Download this SEO case study
            to understand:
          </p>
          <ul className="space-y-4 text-left">
            {[
              "Basic Mistakes we fixed",
              "How we planned the content strategy",
              "How we used content distribution strategy effectively",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-orange-500 mt-1">✔️</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h4 className="text-red-500 text-sm font-semibold mb-4">Download Case Study</h4>
          <p className="text-gray-700 text-sm mb-6">
            Download the report to understand the process behind the success story
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Website*"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="bg-gray-100 border border-gray-300 px-4 py-2 text-lg tracking-widest text-black text-center rounded-md">
              E D 2 P
            </div>
            <input
              type="text"
              placeholder="Enter above code"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#2d89bf] text-white py-2 px-4 rounded-md hover:bg-[#256fa1] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyForm;
