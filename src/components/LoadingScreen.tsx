import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-bg-primary flex items-center justify-center p-4"
        >
          <div className="text-center w-full max-w-sm mx-auto">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 sm:mb-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-2xl">
                A
              </div>
            </motion.div>

            {/* Loading Animation */}
            <div className="flex space-x-2 justify-center mb-3 sm:mb-4">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 0, -10] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full"
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-text-secondary font-medium tracking-wide text-sm sm:text-base"
            >
              Loading Portfolio...
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4 sm:mt-6 max-w-xs mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 