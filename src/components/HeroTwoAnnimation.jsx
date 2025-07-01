import { motion } from "framer-motion";

const HeroTwoAnnimation = ({ image, alt }) => {
  return (
    <div className="relative lg:pt-16 md:ml-20 lg:ml-0 group hover:-translate-y-4 transition-all duration-500">
      {/* Background Box Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -200 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1, type: "spring", stiffness: 60 }}
        className="bg-[#f7f7f7] w-[280px] h-[240px] md:w-[500px] md:h-[380px] rounded-4xl absolute z-0 left-10 lg:left-16 hover:-translate-y-4 transition-all duration-500"
      />

      {/* Foreground Image Animation with Zoom on Hover */}
      <motion.img
        src={image}
        alt={alt}
        initial={{ opacity: 0, x: -150, rotate: -5, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
        transition={{ duration: .1, delay: 0.1, type: "spring", stiffness: 80 }}
        className="w-[280px] h-[240px] md:w-[500px] md:h-[380px] rounded-4xl absolute z-10 top-10 lg:top-28 transform transition-transform duration-500 hover:-translate-y-4 "
      />
    </div>
  );
};

export default HeroTwoAnnimation;
