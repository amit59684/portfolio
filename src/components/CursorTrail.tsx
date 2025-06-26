import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if device is desktop
  useEffect(() => {
    const checkDevice = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth >= 1024;
      setIsDesktop(!isTouchDevice && isLargeScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDesktop) return;

    const newPoint: TrailPoint = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      timestamp: Date.now(),
    };

    setTrail(prevTrail => {
      const updatedTrail = [...prevTrail, newPoint];
      // Keep only recent points (last 15 points or 500ms)
      const cutoffTime = Date.now() - 500;
      return updatedTrail
        .filter(point => point.timestamp > cutoffTime)
        .slice(-15);
    });
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove, isDesktop]);

  // Clean up old trail points
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const cutoffTime = Date.now() - 500;
      setTrail(prevTrail => 
        prevTrail.filter(point => point.timestamp > cutoffTime)
      );
    }, 100);

    return () => clearInterval(cleanupInterval);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trail.map((point, index) => {
          const age = Date.now() - point.timestamp;
          const opacity = Math.max(0, 1 - age / 500);
          const scale = Math.max(0.1, 1 - age / 500);
          
          return (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: opacity * 0.8,
                scale: scale,
                x: point.x - 6,
                y: point.y - 6,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.2,
                ease: "easeOut"
              }}
              className="absolute w-3 h-3 pointer-events-none"
              style={{
                background: `radial-gradient(circle, 
                  rgba(99, 102, 241, ${opacity * 0.8}) 0%, 
                  rgba(168, 85, 247, ${opacity * 0.6}) 50%, 
                  transparent 100%
                )`,
                borderRadius: '50%',
                boxShadow: `0 0 ${scale * 10}px rgba(99, 102, 241, ${opacity * 0.3})`,
              }}
            />
          );
        })}
      </AnimatePresence>

      {/* Main cursor dot */}
      <motion.div
        className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full pointer-events-none mix-blend-difference"
        animate={{
          x: trail.length > 0 ? trail[trail.length - 1]?.x - 4 : -100,
          y: trail.length > 0 ? trail[trail.length - 1]?.y - 4 : -100,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
    </div>
  );
};

export default CursorTrail; 