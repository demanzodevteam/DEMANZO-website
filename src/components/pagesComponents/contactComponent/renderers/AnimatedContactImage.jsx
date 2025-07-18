import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedContactImage = ({ image, alt }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.img
      src={image}
      alt={alt}
      animate={
        isHovering
          ? { x: [0, -5, 5, -5, 5, 0] } // shake only
          : { scale: [1, 1.05, 1] } // zoom only
      }
      transition={{
        scale: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
        x: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-[320px] h-[260px] md:w-[460px] md:h-[340px] object-cover "
    />
  );
};

export default AnimatedContactImage;
