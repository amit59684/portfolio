import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, rotateY: 180 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary flex items-center justify-center overflow-hidden"
        >
          {/* Gaming Grid Background */}
          <div className="gaming-grid" />
          
          {/* 3D Holographic Background */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255, 0, 128, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(255, 255, 0, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(0, 255, 0, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)",
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 opacity-40"
          />

          {/* Animated Gaming Particles */}
          <div className="absolute inset-0">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute particle"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                  scale: 0,
                }}
                animate={{
                  y: [null, -150],
                  scale: [0, Math.random() * 1.5 + 0.5, 0],
                  opacity: [0, 1, 0],
                  boxShadow: [
                    "0 0 10px #00ffff",
                    "0 0 20px #ff0080",
                    "0 0 10px #00ff00",
                    "0 0 10px #00ffff"
                  ]
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* 3D Gaming Rings */}
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            {[1, 2, 3, 4].map((ring, index) => (
              <motion.div
                key={ring}
                animate={{ 
                  rotateY: 360,
                  rotateX: [0, 15, 0, -15, 0]
                }}
                transition={{ 
                  rotateY: { duration: 15 + index * 5, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 8 + index * 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className={`absolute border-2 rounded-full ${
                  index % 2 === 0 ? 'border-primary' : 'border-secondary'
                }`}
                style={{
                  width: `${200 + index * 80}px`,
                  height: `${200 + index * 80}px`,
                  borderColor: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
                  opacity: 0.3 - index * 0.05,
                  filter: `drop-shadow(0 0 ${10 + index * 5}px ${index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'})`
                }}
              />
            ))}
          </div>

          {/* Main Gaming Content */}
          <div className="relative z-10 text-center max-w-lg mx-auto px-6">
            {/* 3D Gaming Logo with Holographic Effects */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="relative mb-12 card-3d"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.4), inset 0 0 30px rgba(0, 255, 255, 0.2)",
                    "0 0 50px rgba(255, 0, 128, 0.8), 0 0 100px rgba(255, 0, 128, 0.4), inset 0 0 50px rgba(255, 0, 128, 0.2)",
                    "0 0 30px rgba(255, 255, 0, 0.8), 0 0 60px rgba(255, 255, 0, 0.4), inset 0 0 30px rgba(255, 255, 0, 0.2)",
                    "0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.4), inset 0 0 30px rgba(0, 255, 255, 0.2)",
                  ],
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, -5, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 mx-auto bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl flex items-center justify-center text-5xl font-bold text-bg-primary relative overflow-hidden card-3d-inner gaming-panel"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Holographic shine effect */}
                <motion.div
                  initial={{ x: "-200%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />
                
                {/* Gaming logo with glitch effect */}
                <motion.span 
                  className="relative z-10 font-orbitron gaming-heading"
                  animate={{
                    textShadow: [
                      "0 0 10px #00ffff",
                      "2px 2px 0px #ff0080, -2px -2px 0px #00ffff",
                      "0 0 10px #ffff00",
                      "0 0 10px #00ffff"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  A
                </motion.span>
              </motion.div>
              
              {/* 3D Orbital Gaming Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotateY: 360,
                    rotateZ: i % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 flex items-start justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className={`w-3 h-3 rounded-full ${i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-accent'}`}
                    style={{
                      marginTop: `${-20 - i * 10}px`,
                      boxShadow: `0 0 15px ${i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--secondary)' : 'var(--accent)'}`
                    }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.6, 1, 0.6],
                      rotateX: [0, 180, 360]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Gaming Brand Name with Glitch Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mb-8"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold gaming-heading neon-text mb-3"
                data-text="AMIT ADHIKARY"
                animate={{
                  filter: [
                    "hue-rotate(0deg)",
                    "hue-rotate(180deg)",
                    "hue-rotate(360deg)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                AMIT ADHIKARY
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="text-text-secondary font-medium text-lg neon-text-pink font-orbitron tracking-wider"
              >
                DIGITAL ARCHITECT
              </motion.p>
            </motion.div>

            {/* 3D Gaming Progress System */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative mb-8"
            >
              <div className="gaming-progress h-4 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2)"
                  }}
                >
                  {/* Progress bar shine effect */}
                  <motion.div
                    animate={{ x: [-50, 150] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                  />
                  
                  {/* Gaming-style progress segments */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" 
                       style={{
                         backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(255,255,255,0.2) 9px, rgba(255,255,255,0.2) 10px)"
                       }} />
                </motion.div>
              </div>
              
              {/* 3D Progress Display */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-center mt-4"
              >
                <motion.span 
                  className="text-2xl font-bold font-orbitron neon-text"
                  animate={{
                    color: [
                      "var(--primary)",
                      "var(--secondary)",
                      "var(--accent)",
                      "var(--primary)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {Math.round(Math.min(progress, 100))}%
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Gaming Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex justify-center space-x-3 mb-6"
            >
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.4, 1, 0.4],
                    boxShadow: [
                      "0 0 10px var(--primary)",
                      "0 0 30px var(--secondary)",
                      "0 0 10px var(--accent)",
                      "0 0 10px var(--primary)"
                    ]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index % 3 === 0 ? 'bg-primary' : 
                    index % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                  }`}
                />
              ))}
            </motion.div>

            {/* Gaming Status Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-text-secondary text-sm font-orbitron tracking-widest uppercase"
            >
              <motion.span
                animate={{
                  color: [
                    "var(--text-secondary)",
                    "var(--primary)",
                    "var(--secondary)",
                    "var(--text-secondary)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                INITIALIZING PORTFOLIO MATRIX...
              </motion.span>
            </motion.p>
          </div>

          {/* Gaming Corner Elements */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-8 left-8 w-24 h-24 border-2 border-primary rounded-full opacity-30"
            style={{ filter: "drop-shadow(0 0 10px var(--primary))" }}
          />
          
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-8 right-8 w-20 h-20 border-2 border-secondary rounded-full opacity-30"
            style={{ filter: "drop-shadow(0 0 10px var(--secondary))" }}
          />

          {/* Gaming HUD Elements */}
          <div className="absolute top-4 right-4 text-xs font-orbitron text-primary opacity-70">
            <div>SYS_LOAD: ACTIVE</div>
            <div>NET_STATUS: ONLINE</div>
            <div>RENDER: 3D_MODE</div>
          </div>

          <div className="absolute bottom-4 left-4 text-xs font-orbitron text-secondary opacity-70">
            <div>VERSION: 2.0.GAMING</div>
            <div>FPS: ∞</div>
            <div>PING: &lt;1ms</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 