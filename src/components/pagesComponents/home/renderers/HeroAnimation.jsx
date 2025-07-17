import { motion } from "framer-motion";
import hero from '../../../../assets/hero1.webp';

const HeroAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1 }}
      transition={{
        duration: 1,
        ease: "easeIn"
      }}
    >
      <img src={hero.src} alt="image" className="w-[600px] md:mx-auto lg:mx-0" />
    </motion.div>

  )
}

export default HeroAnimation
