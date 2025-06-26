import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const titles = [
    'Backend Developer',
    'Full Stack Developer', 
    'Problem Solver',
    'Code Architect'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = loopNum % titles.length;
    const fullText = titles[current];

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 150);

      if (displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, 100);

      if (displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, loopNum, titles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0 perspective-container">
      {/* Gaming 3D Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* 3D Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle-3d"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              z: Math.random() * 100,
            }}
            animate={{
              y: [null, -100],
              rotateY: [0, 360],
              rotateX: [0, 180],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full transform-3d">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1 transform-3d"
          >
                         {/* Gaming Style Greeting */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="flex items-center justify-center lg:justify-start space-x-2"
             >
               <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
               <p className="text-base sm:text-lg text-neon-cyan font-mono font-medium hologram-text">
                 &gt; INITIALIZING_PORTFOLIO
               </p>
             </motion.div>

            {/* 3D Name with Neon Effects */}
            <motion.h1
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transform-3d perspective-container"
            >
              <motion.span 
                className="block text-white hover:text-neon-cyan transition-colors duration-300"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{
                  textShadow: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff'
                }}
              >
                Amit
              </motion.span>
              <motion.span 
                className="block hologram-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Adhikary
              </motion.span>
            </motion.h1>

            {/* Gaming Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-12 sm:h-16 flex items-center justify-center lg:justify-start gaming-card p-4 rounded-lg"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-mono text-neon-purple">
                &gt; {displayText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-neon-cyan ml-1"
                >
                  █
                </motion.span>
              </span>
            </motion.div>

            {/* Gaming Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 gaming-card p-6"
            >
              Welcome to my digital realm! I'm a passionate{' '}
              <span className="hologram-text font-semibold">Full Stack Developer</span>{' '}
              crafting immersive web experiences with cutting-edge technologies. 
              Specializing in React, Python, Django, and modern web architectures.
            </motion.p>

            {/* Gaming Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: '0 0 30px #00ffff'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="neon-button transform-3d"
                style={{
                  background: 'linear-gradient(45deg, #00ffff, #8b5cf6)',
                  textShadow: '0 0 10px #ffffff'
                }}
              >
                ⚡ View Projects
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -5,
                  borderColor: '#00ffff'
                }}
                whileTap={{ scale: 0.95 }}
                className="gaming-card px-6 py-3 border-2 border-neon-purple text-neon-purple hover:text-white hover:bg-neon-purple/20 rounded-lg font-semibold transition-all duration-300 text-center transform-3d"
              >
                🎮 Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Avatar/Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.4, type: "spring", stiffness: 100 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 transform-3d perspective-container"
          >
            <div className="relative">
              {/* 3D Hologram Frame */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -inset-8 border border-neon-cyan rounded-full opacity-30"
              />
              
              <motion.div
                animate={{ 
                  rotateY: [360, 0],
                  scale: [1.1, 1, 1.1]
                }}
                transition={{ 
                  rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -inset-12 border border-neon-purple rounded-full opacity-20"
              />

              {/* 3D Profile Container */}
              <motion.div
                animate={{ 
                  rotateX: [0, 5, 0, -5, 0],
                  rotateY: [0, 2, 0, -2, 0],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 gaming-card overflow-hidden transform-3d"
                style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  boxShadow: '0 0 50px #00ffff, 0 0 100px #8b5cf6'
                }}
              >
                <motion.img
                  src={`${process.env.PUBLIC_URL}/assets/images/Pi7_Passport_Photo_v2.jpeg`}
                  alt="Amit Adhikary"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hologram Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20 animate-pulse" />
                
                                 {/* Gaming HUD Elements */}
                 <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-neon-green font-mono text-xs">
                   DEV_MODE
                 </div>
                 <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-neon-cyan font-mono text-xs">
                   LEVEL: ∞
                 </div>
              </motion.div>

              {/* Floating Gaming Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-neon-cyan rounded-full"
                  animate={{
                    x: [0, 20, -20, 0],
                    y: [0, -30, 30, 0],
                    rotateZ: [0, 180, 360],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${10 + i * 15}%`,
                    boxShadow: '0 0 20px currentColor'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gaming Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center text-neon-cyan"
          >
            <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
              />
            </div>
            <p className="text-xs mt-2 font-mono">SCROLL TO EXPLORE</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 