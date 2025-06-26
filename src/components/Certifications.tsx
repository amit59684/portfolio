import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Star, Calendar, Clock, Zap } from 'lucide-react';

const Certifications: React.FC = () => {
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

  const placeholderCertifications = [
    {
      icon: '🏆',
      title: 'Professional Certifications',
      description: 'Industry-recognized certifications in web development and programming'
    },
    {
      icon: '⭐',
      title: 'Achievement Awards',
      description: 'Recognition for outstanding performance and contributions'
    },
    {
      icon: '🎖️',
      title: 'Course Completions',
      description: 'Specialized courses and training programs completed'
    },
    {
      icon: '🚀',
      title: 'Project Milestones',
      description: 'Major project achievements and successful deliveries'
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-bl from-secondary/3 to-primary/3 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 sm:px-4 py-2 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-secondary/20"
          >
            Recognition & Excellence
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6"
          >
            Certifications & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of professional certifications, achievements, and milestones in my development journey
          </motion.p>
        </motion.div>

        {/* Coming Soon Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Main Coming Soon Card */}
          <div className="bg-gradient-to-br from-bg-card/50 to-bg-card/30 backdrop-blur-lg border border-border-color rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full"
                  initial={{
                    x: Math.random() * 100 + '%',
                    y: Math.random() * 100 + '%',
                    scale: 0,
                  }}
                  animate={{
                    y: [null, '-20px'],
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              {/* Main Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl"
              >
                <Award className="text-white" size={40} />
              </motion.div>

              {/* Coming Soon Text */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
              >
                Coming Soon
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
              >
                This section will showcase my professional certifications, achievements, and milestones. 
                Stay tuned for updates!
              </motion.p>

              {/* Progress Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="flex items-center justify-center space-x-2 mb-8"
              >
                <Clock className="text-primary" size={20} />
                <span className="text-text-secondary font-medium">In Development</span>
              </motion.div>

              {/* Animated Progress Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="w-64 h-2 bg-bg-secondary rounded-full mx-auto mb-8 overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
                />
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <Zap size={20} />
                  <span>Stay Updated</span>
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {placeholderCertifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + (index * 0.1) }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-bg-card/40 to-bg-card/20 backdrop-blur-sm border border-border-color rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="text-4xl mb-4"
                >
                  {cert.icon}
                </motion.div>
                
                <h4 className="font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h4>
                
                <p className="text-text-secondary text-sm">
                  {cert.description}
                </p>

                {/* Coming Soon Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + (index * 0.1) }}
                  className="mt-4 inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20"
                >
                  Coming Soon
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-16 h-16 border-2 border-primary/30 rounded-full flex items-center justify-center"
          >
            <Star className="text-primary/50" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 