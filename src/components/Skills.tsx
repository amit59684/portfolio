import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Users, Brain, Zap } from 'lucide-react';

interface SkillItemProps {
  name: string;
  level: number;
  icon: string;
  delay: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, icon, delay }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 mr-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
            {name}
          </h4>
          <div className="text-sm text-text-secondary">{level}% Proficiency</div>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full bg-bg-secondary rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${animatedLevel}%` : 0 }}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50 blur-sm rounded-full" />
          </motion.div>
        </div>
        
        {/* Percentage indicator */}
        <motion.div
          className="absolute -top-8 text-xs font-medium text-primary bg-bg-card px-2 py-1 rounded shadow-lg"
          initial={{ opacity: 0, x: 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            x: isInView ? `${(animatedLevel / 100) * 100 - 10}%` : 0
          }}
          transition={{ duration: 1.5, delay: delay + 0.3 }}
        >
          {animatedLevel}%
        </motion.div>
      </div>
    </motion.div>
  );
};

interface SoftSkillProps {
  title: string;
  icon: string;
  description: string;
  delay: number;
}

const SoftSkillCard: React.FC<SoftSkillProps> = ({ title, icon, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <div className="bg-gradient-to-br from-bg-card/40 to-bg-card/20 backdrop-blur-sm border border-border-color rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        
        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
            <img src={icon} alt={title} className="w-10 h-10 object-contain" />
          </div>
          
          <h4 className="font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
          
          <p className="text-text-secondary text-sm">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "Python", level: 90, icon: "/assets/images/TS/python.png" },
    { name: "Django", level: 85, icon: "/assets/images/TS/django (1).png" },
    { name: "MySQL", level: 80, icon: "/assets/images/TS/mysql.png" },
    { name: "MongoDB", level: 75, icon: "/assets/images/TS/database-storage.png" },
    { name: "HTML", level: 95, icon: "/assets/images/TS/programming.png" },
    { name: "CSS", level: 88, icon: "/assets/images/TS/coding.png" },
    { name: "Django REST", level: 82, icon: "/assets/images/TS/django.png" }
  ];

  const softSkills = [
    {
      title: "Problem Solving",
      icon: "/assets/images/SS/problem-solving_10645621.png",
      description: "Expert in breaking down complex problems into manageable solutions"
    },
    {
      title: "Teamwork",
      icon: "/assets/images/SS/partners_5371115.png",
      description: "Collaborative approach to achieving project goals"
    },
    {
      title: "Communication",
      icon: "/assets/images/SS/language_2761083.png",
      description: "Clear and effective communication across all levels"
    },
    {
      title: "Adaptability",
      icon: "/assets/images/SS/Adaptibility.png",
      description: "Quick to adapt to new technologies and methodologies"
    },
    {
      title: "Creativity",
      icon: "/assets/images/SS/Creativity.png",
      description: "Innovative thinking to create unique solutions"
    },
    {
      title: "Time Management",
      icon: "/assets/images/SS/productive_2753156.png",
      description: "Efficient prioritization and deadline management"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-bl from-secondary/3 to-primary/3 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20"
          >
            What I know
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
          >
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Technologies</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical expertise and soft skills that enable me to deliver exceptional results
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                Technical Skills
              </h3>
            </div>

            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={0.4 + (index * 0.1)}
                />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mr-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                Soft Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <SoftSkillCard
                  key={skill.title}
                  title={skill.title}
                  icon={skill.icon}
                  description={skill.description}
                  delay={0.6 + (index * 0.1)}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-bg-card/50 to-bg-card/30 backdrop-blur-lg border border-border-color rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center"
              >
                <Brain className="text-white" size={32} />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Always Learning & Growing
              </h3>
              
              <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                I'm constantly exploring new technologies, frameworks, and methodologies to stay at the 
                forefront of web development. My passion for learning drives me to tackle new challenges 
                and expand my skill set continuously.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 