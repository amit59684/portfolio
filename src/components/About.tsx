import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  number: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = number / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center group"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-text-secondary font-medium group-hover:text-text-primary transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-primary/20"
          >
            Get to know me
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6"
          >
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-text-secondary leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group"
              >
                I am a passionate and dedicated Backend developer, currently honing my skills at{' '}
                <span className="text-primary font-semibold group-hover:text-secondary transition-colors duration-300">
                  Masai School
                </span>
                . With a strong foundation in problem-solving and logical thinking, 
                I bring enthusiasm for creating seamless and efficient backend solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="group"
              >
                My expertise lies in{' '}
                <span className="text-secondary font-semibold group-hover:text-primary transition-colors duration-300">
                  Data Structures and Algorithms
                </span>
                , which drives my web development journey. I'm constantly exploring the latest technologies and best 
                practices to deliver robust, scalable applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="group"
              >
                When I'm not coding, you'll find me solving algorithmic challenges, contributing to open-source projects, 
                or exploring new frameworks. I believe in continuous learning and staying updated with the ever-evolving 
                <span className="text-primary font-semibold group-hover:text-secondary transition-colors duration-300 ml-1">
                  tech landscape
                </span>.
              </motion.p>
            </div>

            {/* Highlight Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            >
              {[
                { icon: '🎯', title: 'Problem Solving', desc: 'Expert in algorithmic thinking' },
                { icon: '⚡', title: 'Fast Learner', desc: 'Quick to adapt new technologies' },
                { icon: '🚀', title: 'Performance', desc: 'Optimized and scalable solutions' },
                { icon: '🤝', title: 'Collaboration', desc: 'Great team player and communicator' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-bg-card/50 backdrop-blur-sm border border-border-color rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats and Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Stats Container */}
            <div className="bg-gradient-to-br from-bg-card/50 to-bg-card/30 backdrop-blur-lg border border-border-color rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <StatItem number={50} label="Projects Completed" />
                <StatItem number={2000} label="Problems Solved" />
                <StatItem number={2} label="Years Learning" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-2xl" />
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
            >
              🐍
            </motion.div>

            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 0, 5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg"
            >
              ⚡
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 