import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Code, Instagram, MessageCircle, Menu, X } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
  bgColor: string;
  index: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, color, bgColor, index }) => {
  return (
    <motion.div
      initial={{ 
        x: -100, 
        opacity: 0,
        scale: 0.8
      }}
      animate={{ 
        x: 0, 
        opacity: 1,
        scale: 1
      }}
      exit={{ 
        x: -100, 
        opacity: 0,
        scale: 0.8
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        delay: index * 0.1
      }}
      whileHover={{ 
        x: 8,
        scale: 1.05
      }}
      whileTap={{ scale: 0.95 }}
      className="mb-3 last:mb-0"
    >
      <motion.a
        href={href}
        target={href.startsWith('mailto:') || href.startsWith('tel:') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className={`group flex items-center ${bgColor} rounded-r-full pl-4 pr-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] relative overflow-hidden`}
      >
        {/* Icon container */}
        <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        {/* Label */}
        <span className="text-white font-medium text-sm tracking-wide">
          {label}
        </span>
        
        {/* Hover effect background */}
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-r-full"
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Arrow indicator */}
        <motion.div
          className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

const SocialSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      href: 'mailto:amitadhikary59684@gmail.com',
      icon: <Mail size={18} className="text-white" />,
      label: 'Email Me',
      color: 'bg-red-500',
      bgColor: 'bg-gradient-to-r from-red-600 to-red-500'
    },
    {
      href: 'https://github.com/amit59684',
      icon: <Github size={18} className="text-white" />,
      label: 'GitHub',
      color: 'bg-gray-800',
      bgColor: 'bg-gradient-to-r from-gray-800 to-gray-700'
    },
    {
      href: 'https://www.linkedin.com/in/amit-adhikary-4394b8167/',
      icon: <Linkedin size={18} className="text-white" />,
      label: 'LinkedIn',
      color: 'bg-blue-600',
      bgColor: 'bg-gradient-to-r from-blue-600 to-blue-500'
    },
    {
      href: 'https://leetcode.com/u/amitadhikary/',
      icon: <Code size={18} className="text-white" />,
      label: 'LeetCode',
      color: 'bg-orange-500',
      bgColor: 'bg-gradient-to-r from-orange-600 to-orange-500'
    },
    {
      href: 'https://www.hackerrank.com/profile/amit059684',
      icon: <Code size={18} className="text-white" />,
      label: 'HackerRank',
      color: 'bg-green-600',
      bgColor: 'bg-gradient-to-r from-green-600 to-green-500'
    },
    {
      href: 'https://wa.me/8101029684',
      icon: <MessageCircle size={18} className="text-white" />,
      label: 'WhatsApp',
      color: 'bg-green-500',
      bgColor: 'bg-gradient-to-r from-green-500 to-green-400'
    },
    {
      href: 'https://www.instagram.com/amitadhikary02/',
      icon: <Instagram size={18} className="text-white" />,
      label: 'Instagram',
      color: 'bg-pink-500',
      bgColor: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      {/* Main container */}
      <div className="flex items-center">
        
        {/* Social links container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mr-2 overflow-hidden"
            >
              <div className="py-2">
                {socialLinks.map((link, index) => (
                  <SocialLink
                    key={link.label}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    color={link.color}
                    bgColor={link.bgColor}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
          
        {/* Toggle button */}
        <motion.button
          onClick={toggleMenu}
          className={`w-14 h-14 rounded-r-full flex items-center justify-center shadow-lg transition-all duration-300 relative overflow-hidden ${
            isOpen 
              ? 'bg-gradient-to-r from-red-500 to-red-600' 
              : 'bg-gradient-to-r from-primary to-primary/80'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0'
          }}
        >
          {/* Background animation */}
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ scaleY: 0, transformOrigin: 'bottom' }}
            animate={{ scaleY: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Icon with rotation */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10"
          >
            {isOpen ? (
              <X size={22} className="text-white" />
            ) : (
              <Menu size={22} className="text-white" />
            )}
          </motion.div>
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-primary/30"
            style={{
              borderTopLeftRadius: '0',
              borderBottomLeftRadius: '0',
              borderRadius: '0 50% 50% 0'
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Edge accent */}
          <div className="absolute right-0 top-2 bottom-2 w-0.5 bg-white/30 rounded-full"></div>
        </motion.button>
      </div>

      {/* Mobile hint */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 sm:hidden"
          >
            <div className="bg-gray-900/90 text-white px-3 py-2 rounded-lg text-xs shadow-lg backdrop-blur-sm">
              Social Links
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900/90"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialSidebar; 