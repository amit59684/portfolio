import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Code, Instagram, Phone, MessageCircle } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
  delay: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, color, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        href={href}
        target={href.startsWith('mailto:') || href.startsWith('tel:') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl ${color} relative z-10`}
      >
        {icon}
        
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur ${color}`} />
      </motion.a>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-14 top-1/2 transform -translate-y-1/2 z-20"
          >
            <div className="bg-bg-card/90 backdrop-blur-sm border border-border-color text-text-primary px-3 py-2 rounded-lg text-sm font-medium shadow-xl whitespace-nowrap">
              {label}
              {/* Arrow */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-bg-card/90" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    {
      href: 'mailto:amitadhikary59684@gmail.com',
      icon: <Mail size={20} className="text-white" />,
      label: 'Email',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      href: 'https://github.com/amit59684',
      icon: <Github size={20} className="text-white" />,
      label: 'GitHub',
      color: 'bg-gray-700 hover:bg-gray-800'
    },
    {
      href: 'https://www.linkedin.com/in/amit-adhikary-4394b8167/',
      icon: <Linkedin size={20} className="text-white" />,
      label: 'LinkedIn',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      href: 'https://leetcode.com/u/amitadhikary/',
      icon: <Code size={20} className="text-white" />,
      label: 'LeetCode',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      href: 'https://www.hackerrank.com/profile/amit059684',
      icon: <Code size={20} className="text-white" />,
      label: 'HackerRank',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      href: 'https://wa.me/8145705383',
      icon: <MessageCircle size={20} className="text-white" />,
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      href: 'https://www.instagram.com/amit059684/',
      icon: <Instagram size={20} className="text-white" />,
      label: 'Instagram',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
            color={link.color}
            delay={2.2 + (index * 0.1)}
          />
        ))}

        {/* Connection Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '60px' }}
          transition={{ duration: 0.8, delay: 3 }}
          className="w-px bg-gradient-to-b from-primary to-secondary mx-auto"
        />
      </div>

      {/* Floating Background */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-xl"
      />
    </motion.div>
  );
};

export default SocialSidebar; 