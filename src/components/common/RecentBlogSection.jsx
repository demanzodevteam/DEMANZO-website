import React from "react";
import { MEDIA_URL } from "../../config/urls";

const Card = ({ imageSrc, altText, title }) => {
  return (
    <div className="bg-[#123075] rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-56 object-cover"
          />
        )}
        <div className="text-white text-center p-4">
          <h2 className="demanzo-h2 mb-2">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default function RecentBlogSection({ pageData }) {
  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="demanzo-h1 p-2.5 text-center">
          {pageData?.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {pageData.headings.map((heading, index) => (
            <Card
              key={index}
              imageSrc={MEDIA_URL + pageData.images[index]?.src}
              altText={pageData.images[index]?.alt}
              title={heading}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
