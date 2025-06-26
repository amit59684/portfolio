import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, Star, Trophy, Zap, Target } from 'lucide-react';

const Certifications: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comingSoonFeatures = [
    {
      icon: <Award size={32} />,
      title: "Professional Certifications",
      description: "Industry-recognized certifications in cloud computing, web development, and software engineering"
    },
    {
      icon: <Trophy size={32} />,
      title: "Achievements & Awards",
      description: "Recognition for outstanding performance in coding competitions and project developments"
    },
    {
      icon: <Star size={32} />,
      title: "Skill Endorsements",
      description: "Verified expertise in various programming languages and development frameworks"
    },
    {
      icon: <Target size={32} />,
      title: "Learning Milestones",
      description: "Key educational achievements and completed learning paths in technology"
    }
  ];

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
    <section id="certifications" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Animated Background */}
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
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-tr from-secondary/3 to-primary/3 rounded-full blur-3xl"
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
            Excellence & Recognition
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6"
          >
            Certifications & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed px-4"
          >
            A showcase of professional certifications, awards, and milestones in my development journey
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
          <div className="bg-gradient-to-br from-bg-card/50 to-bg-card/30 backdrop-blur-lg border border-border-color rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />
            
            {/* Floating Icons */}
            <motion.div
              animate={{ 
                y: [-20, 20, -20],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 left-8 text-primary/30"
            >
              <Award size={40} />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [20, -20, 20],
                rotate: [0, -360, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-8 right-8 text-secondary/30"
            >
              <Trophy size={40} />
            </motion.div>

            <motion.div
              animate={{ 
                x: [-15, 15, -15],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
              className="absolute bottom-8 left-1/4 text-primary/20"
            >
              <Star size={35} />
            </motion.div>

            <motion.div
              animate={{ 
                x: [15, -15, 15],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-8 right-1/4 text-secondary/20"
            >
              <Zap size={35} />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10">
              {/* Clock Icon with Animation */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
              >
                <Clock size={40} className="text-white" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4"
              >
                Coming Soon
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
              >
                I'm currently working on obtaining industry certifications and documenting my achievements. 
                This section will showcase my professional credentials and milestones.
              </motion.p>

              {/* Progress Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-8"
              >
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="text-text-secondary font-medium">Progress</span>
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary font-bold"
                  >
                    25%
                  </motion.span>
                </div>
                <div className="w-full max-w-md mx-auto h-2 bg-bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "25%" } : {}}
                    transition={{ duration: 2, delay: 1.2 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: [-20, 100] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Notification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-primary/10 border border-primary/20 rounded-xl p-4 max-w-md mx-auto"
              >
                <p className="text-primary text-sm font-medium">
                  📧 Want to be notified when this section launches? 
                  <span className="block mt-1">Check back soon for updates!</span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {comingSoonFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-bg-card/40 backdrop-blur-sm border border-border-color rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary group-hover:text-secondary transition-colors duration-300 relative z-10"
                >
                  {feature.icon}
                </motion.div>
                
                <h4 className="font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {feature.title}
                </h4>
                
                <p className="text-text-secondary text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 