import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

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
          className="fixed bottom-8 right-8"
          style={{ zIndex: 9999 }}
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            {/* Gaming Progress Circle */}
            <svg
              className="w-16 h-16 -rotate-90 absolute inset-0"
              viewBox="0 0 36 36"
            >
              {/* Background circle */}
              <path
                className="text-gray-800"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Progress circle with neon glow */}
              <motion.path
                className="text-cyan-400"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray="100"
                strokeDashoffset={100 - scrollProgress}
                strokeLinecap="round"
                filter="url(#neonGlow)"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 100 - scrollProgress }}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* SVG Filter for neon glow */}
            <svg width="0" height="0">
              <defs>
                <filter id="neonGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* Gaming Button */}
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border-2 border-cyan-400/50">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp size={24} className="text-white" />
              </motion.div>
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-500/30 rounded-full blur-md" />
            </div>

            {/* Neon Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125" />

            {/* Cyber Ripple effect */}
            <motion.div
              className="absolute inset-0 border-2 border-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
              animate={{ scale: [1, 1.3, 1.5], opacity: [0.5, 0.3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>

          {/* Gaming Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            whileHover={{ opacity: 1, x: 0, scale: 1 }}
            className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
          >
            <div className="bg-gray-900/90 backdrop-blur-sm border border-cyan-400/50 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl whitespace-nowrap">
              <span className="text-cyan-400 font-mono">SCROLL_UP</span>
              <span className="text-gray-400 ml-2">({Math.round(scrollProgress)}%)</span>
              {/* Arrow */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900/90" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop; 