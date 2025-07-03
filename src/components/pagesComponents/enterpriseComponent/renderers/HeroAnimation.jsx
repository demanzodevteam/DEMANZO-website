import { motion } from "framer-motion";
import heroImg from "../../../../assets/hero-cropped.webp";

const HeroAnimation = ({image}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={image} alt="image" class="w-[600px] md:mx-auto lg:mx-0" />
    </motion.div>
  );
};

export default HeroAnimation;
