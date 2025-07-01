
import { motion } from "framer-motion";

const ContactHeroAnimation = ({ image, alt }) => {
  return (
    <div className="relative w-[280px] h-[240px] md:w-[500px] md:h-[380px] lg:pt-16 md:ml-20 lg:ml-0 group">
      {/* Background Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          type: "spring",
          stiffness: 60,
        }}
        className="absolute inset-0 bg-[#f7f7f7] rounded-3xl z-0"
      />

      {/* Foreground Image */}
      <motion.img
        src={image}
        alt={alt}
        initial={{ opacity: 0, x: 250, rotate: -5, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 80,
        }}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10 transform transition-transform duration-500 hover:-translate-y-4"
      />
    </div>
  );
};

export default ContactHeroAnimation;
