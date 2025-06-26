import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Zap, Code2, Gamepad2 } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  delay
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="group relative transform-3d perspective-container"
    >
      <motion.div
        whileHover={{ 
          rotateY: 5, 
          rotateX: 5, 
          translateY: -20,
          scale: 1.02
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="gaming-card h-full overflow-hidden transform-3d"
        style={{
          background: 'linear-gradient(145deg, rgba(0, 255, 255, 0.05), rgba(139, 92, 246, 0.05))',
          border: '1px solid rgba(0, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* 3D Image Container */}
        <div className="relative overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Holographic Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Gaming HUD Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotateZ: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neon-cyan hover:text-white transition-colors duration-300 border border-neon-cyan"
            >
              <Github size={20} />
            </motion.a>
            {liveUrl !== '#' && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotateZ: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neon-purple hover:text-white transition-colors duration-300 border border-neon-purple"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>

          {/* Gaming Status Indicator */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-neon-green text-xs font-mono">LIVE</span>
          </div>
        </div>

        {/* 3D Content Section */}
        <div className="p-4 sm:p-6 relative">
          {/* Gaming Title */}
          <motion.h3
            className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-neon-cyan transition-colors duration-300"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
            }}
          >
            {title}
          </motion.h3>
          
          {/* Description with Gaming Typography */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3 font-mono">
            {description}
          </p>
          
          {/* 3D Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ 
                  scale: 1.1, 
                  rotateZ: 2,
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
                }}
                className="px-2 sm:px-3 py-1 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan rounded-full text-xs sm:text-sm font-medium border border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 font-mono transform-3d"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Gaming Action Bar */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-700">
            <motion.div
              className="flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.5 }}
            >
              <Code2 className="w-4 h-4 text-neon-purple" />
              <Zap className="w-4 h-4 text-neon-cyan" />
            </motion.div>
            <div className="text-xs text-gray-400 font-mono">PROJECT_{String(delay).padStart(2, '0')}</div>
          </div>
        </div>

        {/* 3D Scan Line Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          animate={{
            background: [
              'linear-gradient(0deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
              'linear-gradient(180deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "ParthaEducare",
      description: "A comprehensive medical education consultancy website based in Ranaghat, West Bengal, India. The platform connects students with medical and pharmacy educational opportunities across India, offering expert career guidance and admission assistance with modern web technologies.",
      image: `${process.env.PUBLIC_URL}/assets/images/Projects/parthaeducare.png`,
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
      githubUrl: "https://github.com/amit59684/ParthaEducare",
      liveUrl: "https://parthaeducare.com"
    },
    {
      title: "Admission Junction",
      description: "A comprehensive platform for college admissions and educational institution management built with the MERN stack. Features college listings, application management, user profiles, admin dashboard, and responsive design for seamless user experience.",
      image: `${process.env.PUBLIC_URL}/assets/images/Projects/admissionjunction.png`,
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      githubUrl: "https://github.com/amit59684/AdmissionJunction",
      liveUrl: "https://admissionjunction.com"
    },
    {
      title: "Sudoku Solver",
      description: "Created an intelligent Sudoku puzzle solver using backtracking algorithm that efficiently solves puzzles of varying difficulty levels.",
      image: `${process.env.PUBLIC_URL}/assets/images/Projects/sudoku.png`,
      technologies: ["Python", "Backtracking", "Logic"],
      githubUrl: "https://github.com/amit59684/sudoku_solver",
      liveUrl: "#"
    },
    {
      title: "Terminal Based Maze Solver",
      description: "Developed a sophisticated terminal-based application that solves complex mazes using various pathfinding algorithms including BFS, DFS, and A*.",
      image: `${process.env.PUBLIC_URL}/assets/images/Projects/maze.png`,
      technologies: ["Python", "Algorithms", "Data Structures"],
      githubUrl: "https://github.com/amit59684/Terminal-Based-Maze-Solver",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Gaming 3D Background */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-10" />
        {/* 3D Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle-3d"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Gaming Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 transform-3d"
        >
          {/* Gaming Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 rounded-full text-sm font-semibold mb-4"
          >
            <Gamepad2 className="w-4 h-4 text-neon-cyan" />
            <span className="hologram-text font-mono">MY_PROJECTS.exe</span>
          </motion.div>
          
          {/* 3D Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform-3d"
          >
            Featured{' '}
            <span 
              className="hologram-text"
              style={{
                textShadow: '0 0 30px #00ffff, 0 0 60px #8b5cf6'
              }}
            >
              Projects
            </span>
          </motion.h2>
          
          {/* Gaming Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono gaming-card p-4"
          >
            &gt; Showcasing innovative solutions crafted with cutting-edge technologies. Each project demonstrates my passion for creating immersive digital experiences.
          </motion.p>
        </motion.div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Gaming CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/amit59684"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: '0 0 40px rgba(0, 255, 255, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 neon-button transform-3d"
          >
            <Github size={20} />
            <span>View All Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 