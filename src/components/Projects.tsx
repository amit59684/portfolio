import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className="bg-gradient-to-br from-bg-card/50 to-bg-card/30 backdrop-blur-lg border border-border-color rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/50">
        {/* Project Image */}
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Project Links */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-bg-primary/80 backdrop-blur-sm border border-border-color rounded-full flex items-center justify-center text-text-primary hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Github size={18} />
            </motion.a>
            
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-bg-primary/80 backdrop-blur-sm border border-border-color rounded-full flex items-center justify-center text-text-primary hover:text-secondary hover:border-secondary/50 transition-all duration-300"
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <motion.h3
            className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>
          
          <p className="text-text-secondary leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: delay + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Terminal Based Maze Solver",
      description: "Developed a sophisticated terminal-based application that solves complex mazes using various pathfinding algorithms including BFS, DFS, and A*.",
      image: "/assets/images/Projects/maze.png",
      technologies: ["Python", "Algorithms", "Data Structures"],
      githubUrl: "https://github.com/amit59684/Terminal-Based-Maze-Solver",
      liveUrl: "#"
    },
    {
      title: "Sudoku Solver",
      description: "Created an intelligent Sudoku puzzle solver using backtracking algorithm that efficiently solves puzzles of varying difficulty levels.",
      image: "/assets/images/Projects/sudoku.png",
      technologies: ["Python", "Backtracking", "Logic"],
      githubUrl: "https://github.com/amit59684/sudoku_solver",
      liveUrl: "#"
    },
    {
      title: "Terminal Typing Master",
      description: "Built an interactive terminal-based typing practice program with real-time statistics, accuracy tracking, and progressive difficulty levels.",
      image: "/assets/images/Projects/typing.png",
      technologies: ["Python", "CLI", "Statistics"],
      githubUrl: "https://github.com/amit59684/Terminal_Typing_Master",
      liveUrl: "#"
    },
    {
      title: "Weather Fetch",
      description: "Designed a comprehensive weather application that fetches real-time weather data from APIs and displays detailed forecasts with intuitive interface.",
      image: "/assets/images/Projects/Weather.png",
      technologies: ["Python", "API Integration", "JSON"],
      githubUrl: "https://github.com/amit59684/Weather-fatch",
      liveUrl: "#"
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
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"
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
            className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4 border border-secondary/20"
          >
            My work
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
          >
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Here are some of my recent projects that showcase my skills and passion for development. 
            Each project represents a unique challenge and learning experience.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/amit59684"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Github size={20} />
            <span>View More Projects</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 