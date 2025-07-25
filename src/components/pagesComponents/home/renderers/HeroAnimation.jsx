import { motion } from "framer-motion";
import hero from '../../../../assets/hero1.webp';

const HeroAnimation = () => {
  return (
    <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 1 }}
        transition={{
    duration: 2,
    ease: "easeInOut"
  }}

      >
        <img src={hero.src} alt="image" class="w-[600px] md:mx-auto lg:mx-0" />
    </motion.div>

  )
}

export default HeroAnimation
