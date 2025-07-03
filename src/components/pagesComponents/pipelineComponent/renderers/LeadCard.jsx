import * as LucideIcons from "lucide-react"; // Import all icons as an object

const LeadCard = ({ icon = "TrendingUp", message }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.TrendingUp;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition w-full">
      <div className="py-6">
        <IconComponent className="w-8 h-8 text-blue-600" />
      </div>
      <p className="text-gray-600 font-medium text-center">
        {message.split("<br />").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <hr className="w-full border-gray-200 mt-4" />
    </div>
  );
};

export default LeadCard;
