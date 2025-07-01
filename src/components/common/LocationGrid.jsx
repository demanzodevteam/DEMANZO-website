import LocationCard from "./LocationCard";

const locations = [
  {
    mapSrc:
      "https://maps.google.com/maps?q=4418%2C%206982%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%85%D9%84%D9%83%20%D9%81%D9%87%D8%AF...&output=embed&iwloc=near",
    title: "Saudi Arabia office",
    line1:
      "TCL, 4, 6th Floor Al Muttahid Tower, Opp. Kingdom Tower King Fahad Road Riyadh, Saudi Arabia",
    line2: "(+966)112489894",
  },
  {
    mapSrc:
      "https://maps.google.com/maps?q=Demanzo%2C%20274%20D2%2C%20Orchid%20tech%20park...&output=embed&iwloc=near",
    title: "India Office",
    line1:
      "Demanzo, 274 D2, Orchid tech park, Pioneer Thoppu KP Road, Nagercoil, Tamil Nadu 629003",
    line2: "+91-9751840872",
  },
  {
    mapSrc: "https://maps.google.com/maps?q=London&output=embed&iwloc=near",
    title: "Partner Offices: London & Queensland",
    line1: "London, United Kingdom\nQueensland, Australia",
    line2:
      "We have partnered with agencies in Australia and UK. Contact us if you would like to work with one of our local partners near your location.",
  },
  {
    mapSrc:
      "https://maps.google.com/maps?q=L2%2F696%20Bourke%20St&output=embed&iwloc=near",
    title: "Australian Office",
    line1: "L2, 696 Bourke Street\nMelbourne 3000\n0448 806 897",
    line2: "",
  },
];

const LocationGrid = () => {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
};

export default LocationGrid;
