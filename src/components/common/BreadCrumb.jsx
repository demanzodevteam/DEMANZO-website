import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react'; // Optional icon
import { useEffect } from 'react';

const Breadcrumb = ({ pathname = '' }) => {
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setHasScrolled(latest > 0.01);
  });

  const crumbs = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, i, arr) => {
      const href = '/' + arr.slice(0, i + 1).join('/');
      return { label: decodeURIComponent(segment), href };
    });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : -10 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 left-4 z-[9998] bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-md flex items-center space-x-2 text-sm text-gray-800 pointer-events-none"
    >
      <a href="/" className="pointer-events-auto hover:underline">Home</a>
      {crumbs.map((crumb) => (
        <span key={crumb.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-500" />
          <a href={crumb.href} className="pointer-events-auto capitalize hover:underline">
            {crumb.label}
          </a>
        </span>
      ))}
    </motion.nav>
  );
};

export default Breadcrumb;
