import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
  description: string;
}

const SkillsGlass: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    { name: 'Python', level: 90, icon: '🐍', category: 'backend', description: 'Advanced Python development with Django, Flask' },
    { name: 'React', level: 85, icon: '⚛️', category: 'frontend', description: 'Modern React with Hooks, Context, Redux' },
    { name: 'Django', level: 80, icon: '🎯', category: 'backend', description: 'Full-stack web development framework' },
    { name: 'JavaScript', level: 85, icon: '🟨', category: 'frontend', description: 'ES6+, TypeScript, Node.js' },
    { name: 'MySQL', level: 75, icon: '🗃️', category: 'database', description: 'Database design and optimization' },
    { name: 'MongoDB', level: 70, icon: '🍃', category: 'database', description: 'NoSQL database management' },
    { name: 'Git', level: 85, icon: '📝', category: 'tools', description: 'Version control and collaboration' },
    { name: 'Docker', level: 65, icon: '🐳', category: 'tools', description: 'Containerization and deployment' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: '🚀' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'database', name: 'Database', icon: '💾' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-md border ${
                activeCategory === category.id
                  ? 'bg-primary/20 border-primary text-primary shadow-lg shadow-primary/25'
                  : 'bg-white/5 border-white/10 text-text-secondary hover:bg-white/10 hover:border-primary/30'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                {/* Glass Card */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {/* Skill Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-text-secondary mb-2">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">
                    {skill.description}
                  </p>

                  {/* Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'blur(20px)' }}
                  />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl"
                    initial={{ x: '-100%' }}
                    animate={hoveredSkill === skill.name ? { x: '100%' } : { x: '-100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Floating Skill Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies', value: '15+', icon: '🛠️' },
            { label: 'Projects', value: '50+', icon: '🚀' },
            { label: 'Experience', value: '2+', icon: '⭐' },
            { label: 'Certifications', value: '5+', icon: '🏆' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsGlass; 