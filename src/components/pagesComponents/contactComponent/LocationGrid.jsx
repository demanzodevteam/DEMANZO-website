// src/components/LocationGrid.jsx
import LocationCard from "../../common/LocationCard";

const locations = [
  {
    mapSrc:
      "https://maps.google.com/maps?q=4418%2C%206982%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%85%D9%84%D9%83%20%D9%81%D9%87%D8%AF%20%D8%A7%D9%84%D9%81%D8%B1%D8%B9%D9%8A%D8%8C%20Ar%20Rahmaniyah%20Riyadh%2012341%204418%2012341%2C%20Saudi%20Arabia&t=m&z=10&output=embed&iwloc=near",
    title: "Saudi Arabia office",
    line1:
      "TCL, 4, 6th Floor Al Muttahid Tower, Opp. Kingdom Tower King Fahad Road Riyadh, Saudi Arabia ",
    number: "(+966)112489894",
  },
  {
    mapSrc:
      "https://maps.google.com/maps?q=Demanzo%2C%20274%20D2%2C%20Orchid%20tech%20park&t=m&z=10&output=embed&iwloc=near",
    title: "India Office",
    line1:
      "Demanzo, 274 D2, Orchid tech park, Piooner Thoppu KP Road, Nagercoil,Tamil Nadu 629003, (Near Atens bajaj Showroom)",
    number: "+91-9751840872",
  },
  {
    mapSrc:
      "https://maps.google.com/maps?q=London&t=m&z=10&output=embed&iwloc=near",
    title: "Partner Offices: London & Queensland",
    line1: "London, United Kingdom",
    line2: "Queensland, Australia",
    line3:
      "We have partnered with agencies in Australia and UK. Contact us if you would like to work with one of our local partners near your location.",
  },
  {
    mapSrc:
      "https://maps.google.com/maps?q=L2%2F696%20Bourke%20St&t=m&z=10&output=embed&iwloc=near",
    title: "Australian Office",
    line1: (
      <>
        L2, 696 Bourke Street,
        <br />
        Melbourne 3000
        <br /> 0448 806 897
      </>
    ),
  },
];

const LocationGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {locations.map((loc, index) => (
        <LocationCard
          key={index}
          mapSrc={loc.mapSrc}
          title={loc.title}
          line1={loc.line1}
          line2={loc.line2}
          line3={loc.line3}
        />
      ))}
    </div>
  );
};

export default LocationGrid;
