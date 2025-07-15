const LocationCard = ({ mapSrc, title, line1, line2 }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-start text-left gap-4 h-full">
      <iframe
        src={mapSrc}
        width="100%"
        height="200"
        allowFullScreen
        loading="lazy"
        title={title}
        className="rounded-md"
      ></iframe>
      <h2 className="demanzo-h2 mt-2">{title}</h2>
      <p className="demanzo-bold-p whitespace-pre-line">{line1}</p>
      {line2 && <p className="demanzo-bold-p whitespace-pre-line">{line2}</p>}
    </div>
  );
};

export default LocationCard;
