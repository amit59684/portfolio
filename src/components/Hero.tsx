import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, Gamepad2, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'FULL STACK DEVELOPER',
    'BACKEND ARCHITECT', 
    'DIGITAL INNOVATOR',
    'CODE WARRIOR',
    'SYSTEM DESIGNER'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentTitle = titles[currentIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 150);
    }

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gaming Grid Background */}
      <div className="gaming-grid" />
      
      {/* 3D Holographic Background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(0, 255, 255, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 60%, rgba(255, 0, 128, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 30%, rgba(255, 255, 0, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 70%, rgba(0, 255, 0, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 40%, rgba(0, 255, 255, 0.15) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 opacity-60"
      />

      {/* Floating Gaming Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, -100],
              x: [null, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, Math.random() * 1.5 + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          >
            <div 
              className={`w-2 h-2 rounded-full ${
                i % 4 === 0 ? 'bg-primary' : 
                i % 4 === 1 ? 'bg-secondary' : 
                i % 4 === 2 ? 'bg-accent' : 'bg-success'
              }`}
              style={{
                boxShadow: `0 0 15px ${
                  i % 4 === 0 ? 'var(--primary)' : 
                  i % 4 === 1 ? 'var(--secondary)' : 
                  i % 4 === 2 ? 'var(--accent)' : 'var(--success)'
                }`
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Gaming Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center lg:text-left order-2 lg:order-1 space-y-8"
          >
            {/* Gaming Status HUD */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-4 mb-6"
            >
              <div className="flex items-center space-x-2 text-success text-sm font-orbitron">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-neon"></div>
                <span>SYSTEM ONLINE</span>
              </div>
              <div className="text-text-muted">|</div>
              <div className="flex items-center space-x-2 text-primary text-sm font-orbitron">
                <Zap size={12} />
                <span>HIGH PERFORMANCE</span>
              </div>
            </motion.div>

            {/* Gaming Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-text-secondary font-rajdhani text-lg tracking-wide"
            >
              Initialize_Connection()
            </motion.p>

            {/* 3D Gaming Name */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative"
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-orbitron leading-tight"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(0, 255, 255, 0.8)",
                    "0 0 40px rgba(255, 0, 128, 0.8)",
                    "0 0 20px rgba(255, 255, 0, 0.8)",
                    "0 0 20px rgba(0, 255, 255, 0.8)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="block text-text-primary neon-text">AMIT</span>
                <span className="block text-gaming-gradient gaming-heading">ADHIKARY</span>
              </motion.h1>
              
              {/* 3D Holographic overlay */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent)",
                    "linear-gradient(135deg, transparent, rgba(255, 0, 128, 0.1), transparent)",
                    "linear-gradient(225deg, transparent, rgba(255, 255, 0, 0.1), transparent)",
                    "linear-gradient(315deg, transparent, rgba(0, 255, 255, 0.1), transparent)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 opacity-30 rounded-gaming"
              />
            </motion.div>

            {/* Gaming Role Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="h-16 flex items-center justify-center lg:justify-start"
            >
              <div className="gaming-panel p-4 backdrop-blur-gaming">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-orbitron text-gaming-gradient tracking-wider">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-accent ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </motion.div>

            {/* Gaming Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mx-auto lg:mx-0 font-rajdhani"
            >
              Welcome to the <span className="text-primary font-bold">DIGITAL BATTLEFIELD</span>. 
              I'm a specialist in crafting high-performance web architectures, 
              mastering <span className="text-secondary font-bold">React</span>, 
              <span className="text-accent font-bold"> Python</span>, and 
              <span className="text-success font-bold"> Node.js</span> to build 
              next-generation digital experiences.
            </motion.p>

            {/* Gaming Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="gaming-btn px-8 py-4 text-lg font-orbitron shadow-gaming-hover transform-style-preserve-3d"
              >
                <div className="flex items-center space-x-3">
                  <Play size={20} />
                  <span>START MISSION</span>
                </div>
              </motion.button>

              <motion.a
                href="/assets/images/Amit_Adhikary_resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                className="gaming-btn bg-gradient-to-r from-secondary to-danger px-8 py-4 text-lg font-orbitron shadow-neon-pink transform-style-preserve-3d"
              >
                <div className="flex items-center space-x-3">
                  <Download size={20} />
                  <span>DOWNLOAD DATA</span>
                </div>
              </motion.a>
            </motion.div>

            {/* Gaming Stats HUD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              {[
                { label: 'PROJECTS', value: '50+', icon: Code },
                { label: 'EXPERIENCE', value: '2+', icon: Zap },
                { label: 'SKILLS', value: '15+', icon: Gamepad2 }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1, rotateX: 10 }}
                  className="gaming-card text-center p-4 gaming-card-hover"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary font-orbitron">{stat.value}</div>
                  <div className="text-xs text-text-secondary font-rajdhani tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Gaming Avatar Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 60 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative perspective-1000">
              
              {/* 3D Gaming Frame */}
              <motion.div
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative transform-style-preserve-3d"
              >
                {/* Holographic Container */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(0, 255, 255, 0.1)",
                      "0 0 60px rgba(255, 0, 128, 0.6), 0 0 120px rgba(255, 0, 128, 0.3), inset 0 0 60px rgba(255, 0, 128, 0.1)",
                      "0 0 40px rgba(255, 255, 0, 0.6), 0 0 80px rgba(255, 255, 0, 0.3), inset 0 0 40px rgba(255, 255, 0, 0.1)",
                      "0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(0, 255, 255, 0.1)",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-80 h-80 sm:w-96 sm:h-96 rounded-gaming-lg border-4 border-primary/50 relative overflow-hidden gaming-panel backdrop-blur-gaming"
                >
                  
                  {/* Avatar Image */}
                  <motion.img
                    src={`${process.env.PUBLIC_URL}/assets/images/Pi7_Passport_Photo_v2.jpeg`}
                    alt="Amit Adhikary"
                    className="w-full h-full object-cover rounded-gaming"
                    animate={{
                      filter: [
                        "hue-rotate(0deg) brightness(1.1)",
                        "hue-rotate(30deg) brightness(1.2)",
                        "hue-rotate(0deg) brightness(1.1)",
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  
                  {/* Holographic Overlay */}
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.2) 50%, transparent 70%)",
                        "linear-gradient(135deg, transparent 30%, rgba(255, 0, 128, 0.2) 50%, transparent 70%)",
                        "linear-gradient(225deg, transparent 30%, rgba(255, 255, 0, 0.2) 50%, transparent 70%)",
                        "linear-gradient(315deg, transparent 30%, rgba(0, 255, 255, 0.2) 50%, transparent 70%)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 opacity-60"
                  />

                  {/* Gaming HUD Overlay */}
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-gaming">
                    {/* Corner HUD Elements */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary"></div>
                    
                    {/* Status Bar */}
                    <div className="absolute bottom-4 left-4 right-4 bg-bg-primary/80 backdrop-blur-sm rounded p-2">
                      <div className="flex justify-between text-xs font-orbitron">
                        <span className="text-success">STATUS: ONLINE</span>
                        <span className="text-primary">LVL: EXPERT</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3D Floating Gaming Icons */}
                {[
                  { icon: '⚡', color: 'primary', delay: 0 },
                  { icon: '🚀', color: 'secondary', delay: 1 },
                  { icon: '💎', color: 'accent', delay: 2 },
                  { icon: '🎯', color: 'success', delay: 3 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -20, 0],
                      rotateY: [0, 180, 360],
                      rotateX: [0, 90, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut"
                    }}
                    className={`absolute text-2xl z-20 transform-style-preserve-3d`}
                    style={{
                      top: `${20 + index * 15}%`,
                      left: index % 2 === 0 ? '-10%' : '110%',
                      filter: `drop-shadow(0 0 10px var(--${item.color}))`
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gaming HUD Elements */}
      <div className="absolute top-6 left-6 text-xs font-orbitron text-primary/70 space-y-1">
        <div>{'<SYSTEM_INIT>'}</div>
        <div>USER: AMIT_ADHIKARY</div>
        <div>ROLE: FULL_STACK_DEV</div>
        <div>{'</SYSTEM_INIT>'}</div>
      </div>

      <div className="absolute top-6 right-6 text-xs font-orbitron text-secondary/70 space-y-1 text-right">
        <div>PERFORMANCE: 100%</div>
        <div>UPTIME: 24/7</div>
        <div>PING: &lt;1ms</div>
        <div>STATUS: READY</div>
      </div>

      {/* Gaming Corner Decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-8 left-8 w-16 h-16 border-2 border-accent/30 rounded-full"
        style={{ filter: "drop-shadow(0 0 10px var(--accent))" }}
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-8 right-8 w-20 h-20 border border-success/30 rounded-full"
        style={{ filter: "drop-shadow(0 0 8px var(--success))" }}
      />
    </section>
  );
};

export default Hero; 