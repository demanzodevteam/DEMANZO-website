import hero from '../assets/hero2.webp';
import { motion } from "framer-motion";

const HeroTwoAnnimation = () => {
  return (
     <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative lg:pt-16 hover:-translate-y-4 transition-all duration-500 md:ml-20 lg:ml-0"
      >
        <div class="bg-[#f7f7f7] w-[280px] h-[240px] md:w-[500px] md:h-[380px] rounded-4xl absolute z-0 left-10 lg:left-16"></div>
        <img src={hero.src} alt="image" class="w-[280px] h-[240px] md:w-[500px] md:h-[380px] rounded-4xl absolute z-10 top-10 lg:top-28" />
    </motion.div>
  )
}

export default HeroTwoAnnimation
