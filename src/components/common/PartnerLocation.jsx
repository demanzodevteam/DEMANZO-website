import React from "react";
import LocationCard from "./LocationCard";

const locations = [
  {
    mapSrc:
     "https://maps.google.com/maps?q=Queensland&t=m&z=10&output=embed&iwloc=near",
  },
  {
    mapSrc:
      "https://maps.google.com/maps?q=Victoria%20australia&t=m&z=10&output=embed&iwloc=near",
  },
  {
    mapSrc: "https://maps.google.com/maps?q=Tasmania&t=m&z=10&output=embed&iwloc=near",
  },

];

export default function PartnerLocation({ pageData }) {

  return (
    <div className="py-25 mx-auto">
      <h1 className="text-[40px] text-center leading-12 font-semibold">
        {pageData?.headings[0]}
      </h1>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <LocationCard
              key={index}
              mapSrc={loc.mapSrc}
              title={loc.title}
              line1={loc.line1}
              line2={loc.line2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
