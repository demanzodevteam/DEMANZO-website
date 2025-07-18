import React from "react";
import { MEDIA_URL } from "../../config/urls";

const Card = ({ imageSrc, altText, title, link }) => {
  return (
    <div className="bg-[#123075] rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <a href={link} className="block cursor-pointer">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-56 object-cover hover:rotate-3 hover:scale-105 transition-all duration-500"
            />
          )}
        </a>
        <div className="text-white text-center p-4">
          <a href={link} className="cursor-pointer">
            <h2
              className="demanzo-h2 mb-2 line-clamp-2"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {title}
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function RecentBlogSection({ pageData }) {
  const lastSixElements = pageData.slice(-6);

  return (
    <div className="p-4 !py-[50px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="demanzo-h1 p-2.5 text-center">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lastSixElements.map((item, index) => (
            <Card
              key={index}
              imageSrc={item.image}
              altText={item.alt}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
