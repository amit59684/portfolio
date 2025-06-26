import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: 'work' | 'education' | 'project';
  color: string;
}

const TimelineInteractive: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'work' | 'education' | 'project'>('all');

  const timelineData: TimelineItem[] = [
    {
      id: '1',
      title: 'Backend Developer',
      company: 'Masai School',
      period: '2023 - Present',
      description: 'Learning and developing backend applications using modern technologies',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      achievements: [
        'Completed 500+ coding challenges',
        'Built 15+ full-stack projects',
        'Mentored 10+ junior developers'
      ],
      type: 'education',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      title: 'Full Stack Project',
      company: 'Personal Project',
      period: '2023',
      description: 'Built a comprehensive e-commerce platform with advanced features',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      achievements: [
        'Implemented real-time chat',
        'Payment gateway integration',
        'Admin dashboard with analytics'
      ],
      type: 'project',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '3',
      title: 'Freelance Developer',
      company: 'Various Clients',
      period: '2022 - 2023',
      description: 'Developed web applications for small businesses and startups',
      technologies: ['JavaScript', 'React', 'Python', 'Django'],
      achievements: [
        'Delivered 20+ projects on time',
        '98% client satisfaction rate',
        'Generated $10k+ in revenue'
      ],
      type: 'work',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const filteredData = filter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === filter);

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return '💼';
      case 'education': return '🎓';
      case 'project': return '🚀';
      default: return '⭐';
    }
  };

  return (
    <div className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Experience & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All', icon: '🌟' },
            { id: 'work', label: 'Work', icon: '💼' },
            { id: 'education', label: 'Education', icon: '🎓' },
            { id: 'project', label: 'Projects', icon: '🚀' }
          ].map((filterOption) => (
            <motion.button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-md border ${
                filter === filterOption.id
                  ? 'bg-primary/20 border-primary text-primary shadow-lg'
                  : 'bg-white/5 border-white/10 text-text-secondary hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{filterOption.icon}</span>
              {filterOption.label}
            </motion.button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full opacity-30" />

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {filteredData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                  >
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 cursor-pointer hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl`}>
                          {getIcon(item.type)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                          <p className="text-primary font-medium">{item.company}</p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="text-text-secondary text-sm mb-4 font-medium">
                        📅 {item.period}
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary mb-4">{item.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {activeItem === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-white/10 pt-4"
                          >
                            <h4 className="text-text-primary font-semibold mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: achIndex * 0.1 }}
                                  className="text-text-secondary text-sm flex items-center gap-2"
                                >
                                  <span className="text-green-400">✓</span>
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand Indicator */}
                      <motion.div
                        animate={{ rotate: activeItem === item.id ? 180 : 0 }}
                        className="flex justify-center mt-4"
                      >
                        <span className="text-primary cursor-pointer">⌄</span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-bg-primary shadow-lg`}
                    />
                    {/* Pulse Effect */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TimelineInteractive; 