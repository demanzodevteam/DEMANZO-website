import BackGroundImg from "../../assets/Background-SEO-Traffic.jpg";
import rocketImg from "../../assets/rocket.png";
import skyImg from "../../assets/sky2.png";
import SEOReportForm from "./SEOReportForm";

export default function GetSeoReport({ pageData }) {
  console.log(pageData?.list_items[0], "pagedata");

  return (
    <div
      className="flex items-center justify-center px-4 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackGroundImg.src})` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-full overflow-hidden p-8 lg:p-14">
        <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
          <img
            src={rocketImg.src}
            alt=""
            className="hover:-translate-y-4 transition-all duration-500"
          />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff]">
            {pageData?.headings[0]}
          </h2>
           <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff]">
            {pageData?.headings[1]}
          </h2>
          <p className="text-[#ffff] leading-8">{pageData?.list_items[0]?.[0]?.para}</p>
          <img
            src={skyImg.src}
            alt=""
            className="hover:-translate-y-4 transition-all duration-500 mt-6"
          />
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg p-6 lg:p-10 mb-30">
          <SEOReportForm />
        </div>
      </div>
    </div>
  );
}
