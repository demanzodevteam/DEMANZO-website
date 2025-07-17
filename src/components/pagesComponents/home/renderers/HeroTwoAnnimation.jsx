import { motion } from "framer-motion";

const HeroTwoAnnimation = ({ image, alt }) => {
  return (
    <div className="flex justify-center">
      {/* Background Box Animation */}
      <motion.div
  animate={{ y: [0, -50, 0, 50, 0] }} 
  transition={{ 
    duration: 3,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
  className="bg-[#f7f7f7] w-[320px] h-[200px] md:w-[460px] md:h-[340px] rounded-4xl absolute"
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
  animate={{ y: [0, -50, 0, 50, 0] }} // More float range
  transition={{ 
    duration: 3, // Faster loop (lower = faster)
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
  className="w-[320px] h-[200px] md:w-[460px] md:h-[340px] rounded-4xl"
/>

    </div>
  );
};

export default HeroTwoAnnimation;
