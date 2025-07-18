import CaptchaImg from '../../assets/Captcha.png';
import BackGroundImg from '../../assets/Background-SEO-Traffic.jpg';
import rocketImg from '../../assets/rocket.png';
import RequestDemoForm from './RequestDemoForm';
import skyImg from '../../assets/sky2.png';
import { motion } from "framer-motion";

const SalesContactSection = ({ SectionData ,children }) => {

  return (
    <div
      className="flex items-center justify-center lg:px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackGroundImg.src})` }} id="contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full overflow-hidden p-8 lg:p-14">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
          <motion.img
  src={rocketImg.src}
  alt="Rocket"
  className="w-auto h-auto"
  animate={{
    y: [0, -10, 0], // up, then back down
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
          <h2 className="demanzo-form-heading">{SectionData?.headings}</h2>

          {SectionData?.list_items[0].map((item, index) => (
            <p key={index} className="demanzo-form-para-text !text-white">
              {item.para}
            </p>
          ))}

          <motion.img
  src={skyImg.src}
  alt="Sky"
  className="mt-6 w-auto h-auto"
  animate={{
    y: [0, -8, 0], // subtle float
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
        </div>

        {/* Right Side - Form */}
        <div className=" rounded-2xl p-6 lg:p-10 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SalesContactSection;
