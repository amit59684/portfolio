import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Code, Zap } from 'lucide-react';

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

      {/* Floating Gaming Particles - Mobile Safe */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? Math.min(window.innerWidth - 50, 1000) : 950),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, -100],
              x: [null, Math.random() * 20 - 10], // Reduced horizontal movement
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
              <div className="gaming-panel p-2 sm:p-4 backdrop-blur-gaming max-w-full overflow-hidden">
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold font-orbitron text-gaming-gradient tracking-wider break-words">
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
              Passionate <span className="text-primary font-bold">Full Stack Developer</span> with expertise in modern web technologies. 
              I specialize in building scalable applications using <span className="text-secondary font-bold">React</span>, 
              <span className="text-accent font-bold"> Python</span>, and 
              <span className="text-success font-bold"> Node.js</span>. 
              From concept to deployment, I deliver robust solutions that exceed expectations.
            </motion.p>



            {/* Gaming Stats HUD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              {[
                { label: 'PROJECTS', value: '55+', icon: Code },
                { label: 'EXPERIENCE', value: '4+', icon: Zap },
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
                {/* Holographic Container - Mobile Responsive */}
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
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 max-w-[90vw] max-h-[90vw] rounded-gaming-lg border-4 border-primary/50 relative overflow-hidden gaming-panel backdrop-blur-gaming mx-auto"
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
                    <div className="absolute top-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-primary"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-primary"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-primary"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-primary"></div>
                    
                    {/* Status Bar */}
                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-bg-primary/80 backdrop-blur-sm rounded p-1 sm:p-2">
                      <div className="flex justify-between text-xs font-orbitron">
                        <span className="text-success">STATUS: ONLINE</span>
                        <span className="text-primary">LVL: EXPERT</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Safe Gaming Icons - Mobile Constrained */}
                <div className="hidden sm:block">
                  {[
                    { icon: '⚡', color: 'primary', delay: 0, position: { top: '10%', right: '105%' } },
                    { icon: '🚀', color: 'secondary', delay: 1, position: { top: '30%', left: '105%' } },
                    { icon: '💎', color: 'accent', delay: 2, position: { top: '70%', right: '105%' } },
                    { icon: '🎯', color: 'success', delay: 3, position: { top: '90%', left: '105%' } },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut"
                      }}
                      className="absolute text-lg z-20 hidden lg:block"
                      style={{
                        top: item.position.top,
                        left: item.position.left,
                        right: item.position.right,
                        filter: `drop-shadow(0 0 8px var(--${item.color}))`
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gaming HUD Elements - Mobile Safe */}
      <div className="absolute top-2 left-2 sm:top-6 sm:left-6 text-xs font-orbitron text-primary/70 space-y-1 max-w-[45vw] overflow-hidden">
        <div className="text-xs sm:text-sm">{'<SYSTEM_INIT>'}</div>
        <div className="text-xs sm:text-sm">USER: AMIT_ADHIKARY</div>
        <div className="text-xs sm:text-sm">ROLE: FULL_STACK_DEV</div>
        <div className="text-xs sm:text-sm">{'</SYSTEM_INIT>'}</div>
      </div>

      <div className="absolute top-2 right-2 sm:top-6 sm:right-6 text-xs font-orbitron text-secondary/70 space-y-1 text-right max-w-[45vw] overflow-hidden">
        <div className="text-xs sm:text-sm">PERFORMANCE: 100%</div>
        <div className="text-xs sm:text-sm">UPTIME: 24/7</div>
        <div className="text-xs sm:text-sm">PING: &lt;1ms</div>
        <div className="text-xs sm:text-sm">STATUS: READY</div>
      </div>

      {/* Gaming Corner Decorations - Mobile Constrained */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 border-2 border-accent/30 rounded-full"
        style={{ filter: "drop-shadow(0 0 10px var(--accent))" }}
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-20 sm:h-20 border border-success/30 rounded-full"
        style={{ filter: "drop-shadow(0 0 8px var(--success))" }}
      />
    </section>
  );
};

export default Hero; 