import { motion } from "framer-motion";

const ContactHeroAnimation = ({ image, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        scale: [null, 1.05, 1.1],
        transition: {
          duration: 0.5,
          times: [0, 0.6, 1],
          ease: ["easeInOut", "easeOut"],
        },
      }}
      className="relative w-[280px] h-[240px] md:w-[500px] md:h-[380px] lg:pt-16 md:ml-20 lg:ml-0 group origin-center"
    >
      {/* Foreground Image */}
      <motion.img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default ContactHeroAnimation;
