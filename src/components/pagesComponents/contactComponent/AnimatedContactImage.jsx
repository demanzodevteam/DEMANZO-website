import { motion } from "framer-motion";

const AnimatedContactImage = ({ image, alt }) => {
  return (
    <motion.img
      src={image}
      alt={alt}
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // smoother spring-like bezier
      }}
      viewport={{ once: true }}
      className="w-[320px] h-[260px] md:w-[460px] md:h-[340px] object-cover rounded-xl transition-transform duration-500 ease-in-out"
    />
  );
};

export default AnimatedContactImage;
