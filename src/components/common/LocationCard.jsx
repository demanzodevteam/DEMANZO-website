const LocationCard = ({ mapSrc, title, line1, line2, line3}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-start text-left gap-4">
      <iframe
        src={mapSrc}
        width="100%"
        height="150"
        allowFullScreen
        loading="lazy"
        className="rounded-md"
        title={title}
      ></iframe>
      <h2 className="mt-4 text-[20px] font-semibold mb-4">{title}</h2>
      <p className="text-[#616670] text-sm  text-[16px] font-medium mb-2 leading-7">
        {line1}
      </p>
      <p className="text-[#616670] text-sm  text-[16px] font-medium  leading-7">
        {line2}
      </p>
      <p className="text-[#616670] text-sm  text-[16px] font-medium mb-5 leading-7">
        {line3}
      </p>
    </div>
  );
};

export default LocationCard;
