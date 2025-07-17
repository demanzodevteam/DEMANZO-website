import BackGroundImg from "../../assets/Background-SEO-Traffic.jpg";
import rocketImg from "../../assets/rocket.png";
import skyImg from "../../assets/sky2.png";
import DownloadReportForm from './DownloadReportForm'
export default function DownloadReport({ pageData }) {
    
    return (
        <div
            className="flex items-center justify-center px-4 py-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackGroundImg.src})` }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-full overflow-hidden p-8 lg:p-14">

                <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
                    <img src={rocketImg.src} alt="" className="hover:-translate-y-4 transition-all duration-500" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff]">{pageData?.paragraphs[0]}!</h2>
                    <p className="text-[#ffff] leading-8">
                       {pageData?.paragraphs[1]}!</p>
                    <img src={skyImg.src} alt="" className="hover:-translate-y-4 transition-all duration-500 mt-6" />
                </div>

                <div className="relative bg-white rounded-2xl shadow-lg p-6 lg:p-10 mb-30">
                    <DownloadReportForm />
                </div>
            </div>
        </div>
      
 
    
    )
}
