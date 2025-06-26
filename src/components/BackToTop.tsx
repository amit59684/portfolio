import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate scroll progress
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 500);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            {/* Progress Circle */}
            <svg
              className="w-14 h-14 -rotate-90 absolute inset-0"
              viewBox="0 0 36 36"
            >
              {/* Background circle */}
              <path
                className="text-bg-secondary"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Progress circle */}
              <motion.path
                className="text-primary"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray="100"
                strokeDashoffset={100 - scrollProgress}
                strokeLinecap="round"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 100 - scrollProgress }}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* Button */}
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp size={20} className="text-white" />
              </motion.div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />

            {/* Ripple effect on hover */}
            <motion.div
              className="absolute inset-0 border-2 border-primary rounded-full opacity-0 group-hover:opacity-100"
              animate={{ scale: [1, 1.2, 1.4], opacity: [0.5, 0.3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            whileHover={{ opacity: 1, x: 0, scale: 1 }}
            className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className="bg-bg-card/90 backdrop-blur-sm border border-border-color text-text-primary px-3 py-2 rounded-lg text-sm font-medium shadow-xl whitespace-nowrap">
              Back to Top ({Math.round(scrollProgress)}%)
              {/* Arrow */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-bg-card/90" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop; 