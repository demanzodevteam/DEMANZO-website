import CaptchaImg from '../../assets/Captcha.png';
import BackGroundImg from '../../assets/Background-SEO-Traffic.jpg';
import rocketImg from '../../assets/rocket.png';
import RequestDemoForm from './RequestDemoForm';
import skyImg from '../../assets/sky2.png'

const SalesContactSection = ({ SectionData }) => {

  return (
    <div
      className="flex items-center justify-center lg:px-4 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackGroundImg.src})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full overflow-hidden p-8 lg:p-14">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
          <img
            src={rocketImg.src}
            alt="Rocket"
            className="hover:-translate-y-4 transition-all duration-500"
          />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff]">
            {SectionData?.headings}
          </h2>

          {SectionData?.list_items[0].map((item, index) => (
            <p key={index} className="text-[#979ba3] leading-8">
              {item.para}
            </p>
          ))}

          <img
            src={skyImg.src}
            alt="Sky"
            className="hover:-translate-y-4 transition-all duration-500 mt-6"
          />
        </div>

        {/* Right Side - Form */}
        <div className=" rounded-2xl shadow-lg p-6 lg:p-10 w-full">
                  <RequestDemoForm/>
        </div>
      </div>
    </div>
  );
};

export default SalesContactSection;
