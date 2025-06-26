import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

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

  const updateTrail = useCallback((x: number, y: number) => {
    const newPoint: TrailPoint = {
      id: Date.now() + Math.random(),
      x,
      y,
      timestamp: Date.now(),
    };

    setTrail(prevTrail => {
      const updatedTrail = [...prevTrail, newPoint];
      // Keep only recent points (last 12 points or 400ms)
      const cutoffTime = Date.now() - 400;
      return updatedTrail
        .filter(point => point.timestamp > cutoffTime)
        .slice(-12);
    });
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDesktop) return;

    // Use pageX/pageY for absolute positioning including scroll
    const x = e.pageX;
    const y = e.pageY;
    
    setCursorPos({ x, y });

    // Throttle trail updates using requestAnimationFrame
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      updateTrail(x, y);
    });
  }, [isDesktop, updateTrail]);

  useEffect(() => {
    if (isDesktop) {
      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
        }
      };
    }
  }, [handleMouseMove, isDesktop]);

  // Clean up old trail points more frequently
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const cutoffTime = Date.now() - 400;
      setTrail(prevTrail => 
        prevTrail.filter(point => point.timestamp > cutoffTime)
      );
    }, 50);

    return () => clearInterval(cleanupInterval);
  }, []);

  // Clear trail when leaving desktop mode
  useEffect(() => {
    if (!isDesktop) {
      setTrail([]);
      setCursorPos({ x: -100, y: -100 });
    }
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <AnimatePresence mode="popLayout">
        {trail.map((point, index) => {
          const age = Date.now() - point.timestamp;
          const maxAge = 400;
          const opacity = Math.max(0, 1 - age / maxAge);
          const scale = Math.max(0.2, 1 - age / maxAge);
          const size = 8 - (index * 0.3); // Gradually smaller sizes
          
          return (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: opacity * 0.7,
                scale: scale,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.15,
                ease: "easeOut"
              }}
              className="absolute pointer-events-none"
              style={{
                left: point.x - size / 2,
                top: point.y - size / 2,
                width: size,
                height: size,
                background: `radial-gradient(circle, 
                  rgba(99, 102, 241, ${opacity * 0.9}) 0%, 
                  rgba(168, 85, 247, ${opacity * 0.7}) 50%, 
                  transparent 100%
                )`,
                borderRadius: '50%',
                boxShadow: `0 0 ${scale * 8}px rgba(99, 102, 241, ${opacity * 0.4})`,
                willChange: 'transform, opacity',
              }}
            />
          );
        })}
      </AnimatePresence>

      {/* Main cursor dot - follows mouse precisely */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          left: cursorPos.x - 3,
          top: cursorPos.y - 3,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          mass: 0.1,
        }}
        style={{
          width: 6,
          height: 6,
          background: 'linear-gradient(45deg, #6366f1, #a855f7)',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(99, 102, 241, 0.6)',
          zIndex: 51,
          willChange: 'transform',
        }}
      />

      {/* Outer ring that follows with slight delay */}
      <motion.div
        className="absolute pointer-events-none border-2 border-primary/30 rounded-full"
        animate={{
          left: cursorPos.x - 12,
          top: cursorPos.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.5,
        }}
        style={{
          width: 24,
          height: 24,
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default CursorTrail; 