import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

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
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-bg-primary/80 backdrop-blur-sm border border-border-color rounded-full flex items-center justify-center text-text-primary hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            </motion.a>
            
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-bg-primary/80 backdrop-blur-sm border border-border-color rounded-full flex items-center justify-center text-text-primary hover:text-secondary hover:border-secondary/50 transition-all duration-300"
              >
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3">
            {description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
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
      image: `${process.env.PUBLIC_URL}/assets/images/Projects/maze.png`,
      technologies: ["Python", "Algorithms", "Data Structures"],
      githubUrl: "https://github.com/amit59684/Terminal-Based-Maze-Solver",
      liveUrl: "#"
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
      title: "Terminal Typing Master",
      description: "Built an interactive terminal-based typing practice program with real-time statistics, accuracy tracking, and progressive difficulty levels.",
      image: `${process.env.PUBLIC_URL}/assets/images/Projects/typing.png`,
      technologies: ["Python", "CLI", "Statistics"],
      githubUrl: "https://github.com/amit59684/Terminal_Typing_Master",
      liveUrl: "#"
    },
    {
      title: "Weather Fetch",
      description: "Designed a comprehensive weather application that fetches real-time weather data from APIs and displays detailed forecasts with intuitive interface.",
      image: `${process.env.PUBLIC_URL}/assets/images/Projects/Weather.png`,
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
    <section id="projects" className="py-16 sm:py-20 lg:py-32 relative">
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
          className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"
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
            My work
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6"
          >
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed px-4"
          >
            Here are some of my recent projects that showcase my skills and passion for development. 
            Each project represents a unique challenge and learning experience.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.p
            className="text-base sm:text-lg text-text-secondary mb-6 sm:mb-8"
            whileHover={{ scale: 1.02 }}
          >
            Want to see more of my work?
          </motion.p>
          
          <motion.a
            href="https://github.com/amit59684"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Github size={20} />
            <span>View All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 