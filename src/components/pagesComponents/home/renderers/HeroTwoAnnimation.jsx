import { motion } from "framer-motion";

const HeroTwoAnnimation = ({ image, alt }) => {
  return (
    <div className="relative lg:pt-16 md:ml-20 lg:ml-0 group hover:-translate-y-4 transition-all duration-500">
      {/* Background Box Animation */}
      <motion.div
  animate={{ y: [0, -200, 0, 200, 0] }} 
  transition={{ 
    duration: 3,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
  className="bg-[#f7f7f7] w-[340px] lg:w-[280px] h-[240px] md:w-[500px] md:h-[380px] rounded-4xl absolute z-0 left-10 lg:left-16 hover:-translate-y-3.5 transition-all duration-500"
/>

      {/* Foreground Image Animation with Zoom on Hover */}
      {/* <motion.img
        src={image}
        alt={alt}
        initial={{ opacity: 0, x: -150, rotate: -5, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
        transition={{ duration: .1, delay: 0.1, type: "spring", stiffness: 80 }}
        className="w-[280px] h-[240px] md:w-[500px] md:h-[380px] rounded-4xl absolute z-10 top-10 lg:top-28 transform transition-transform duration-500 hover:-translate-y-4 "
      /> */}
      <motion.img
  src={image}
  alt={alt}
  animate={{ y: [0, -200, 0, 200, 0] }} // More float range
  transition={{ 
    duration: 3, // Faster loop (lower = faster)
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
  className="w-[360px] h-[240px] md:w-[500px] md:h-[380px] rounded-4xl absolute z-10 top-10 lg:top-28 transform transition-transform duration-500 hover:-translate-y-3.5"
/>

    </div>
  );
};

export default HeroTwoAnnimation;
