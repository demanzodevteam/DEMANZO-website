import BackGroundImg from "../../assets/Background-SEO-Traffic.jpg";
import Illustration from "../../assets/illustration-guava-mascot-as-graphic-designer-cute-style-design-t-shirt-sticker-logo-element_152558-3513-removebg-preview.png";
import { motion } from "framer-motion";
import WhiteLabelContactForm from "./WhiteLabelContactForm";

const WhiteLabelContactSection = ({ SectionData }) => {
  return (
    <div
      className="flex items-center justify-center lg:px-4 bg-cover bg-center"
      id="contact"
      style={{ backgroundImage: `url(${BackGroundImg.src})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full overflow-hidden p-8 lg:p-14">
        {/* Left Side */}

        <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff]">
            {SectionData.headings[0]}
          </h2>
          <motion.img
            src={Illustration.src}
            alt="Illustration"
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
        </div>

        {/* Right Side - Form */}
        <div className="rounded-2xl p-6 lg:p-10 w-full">
          <WhiteLabelContactForm />
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelContactSection;