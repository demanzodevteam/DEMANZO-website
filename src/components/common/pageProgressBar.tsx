'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgress(latest);
    setHasScrolled(latest > 0.01); // Show only after slight scroll
  });

  return (
    <motion.div
      style={{ scaleX: progress }}
      initial={{ opacity: 0 }}
      animate={{ opacity: hasScrolled ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[9999] pointer-events-none"
    >
      <div
        className="h-full w-full"
        style={{
          background: 'linear-gradient(to right, #0057a3, #ff8c00, #f12500)',
        }}
      />
    </motion.div>
  );
};

export default PageProgressBar;
