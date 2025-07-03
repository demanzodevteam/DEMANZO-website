// import { motion } from "framer-motion";
// import heroImg from "../../../../assets/hero-cropped.webp";

// const HeroAnimation = ({image}) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -300 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <img src={image} alt="image" class="w-[500px] md:mx-auto lg:mx-0" />
//     </motion.div>
//   );
// };

// export default HeroAnimation;
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import heroImg from "../../../../assets/hero-cropped.webp";

const HeroAnimation = ({ image }) => {
  useEffect(() => {
  AOS.init();
}, []);

  return (
    <div data-aos="fade-right">
      <img src={image} alt="image" />
    </div>
  );
};

export default HeroAnimation;
