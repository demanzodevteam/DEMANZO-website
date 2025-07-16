const ListCard = ({
  Icon,
  title,
  value,
  iconBg = "#447EFC",
  iconColor = "#FFFFFF",
  valueColor = "#FF5F55",
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-2 sm:flex-row sm:items-center sm:text-left sm:gap-3 text-[#1C1C1C]">
      <div
        className="p-3 rounded-full hover:-translate-y-4 transition-all duration-500"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        {Icon && <Icon />}
      </div>
      <div>
        <h6 className="demanzo-bold-p block">{title}</h6>
        <p className="font-medium" style={{ color: valueColor }}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default ListCard;
