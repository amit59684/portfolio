import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos <= bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Small delay to allow menu to close
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 w-full transition-all duration-300"
      style={{ 
        zIndex: 99999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'block',
        visibility: 'visible',
        opacity: 1
      }}
    >
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'gaming-card border-b border-neon-cyan/30 shadow-cyber' 
            : 'bg-black/20 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Animated Name Logo */}
            <div
              onClick={() => scrollToSection('home')}
              className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center space-x-1">
                {/* First Name - Amit */}
                <div className="flex">
                  {"Amit".split("").map((letter, index) => (
                    <span
                      key={`amit-${index}`}
                      className="text-xl sm:text-2xl font-bold text-text-primary hover:text-neon-cyan transition-colors duration-300 hover:scale-110 inline-block"
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                
                {/* Space */}
                <span className="text-xl sm:text-2xl font-bold text-text-primary">&nbsp;</span>
                
                {/* Last Name - Adhikary */}
                <div className="flex">
                  {"Adhikary".split("").map((letter, index) => (
                    <span
                      key={`adhikary-${index}`}
                      className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-secondary hover:to-primary transition-all duration-300 hover:scale-110 inline-block"
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Animated underline */}
              <div className="h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-1 w-full" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative hover:scale-105 ${
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </button>
                ))}
                
                {/* Resume Button */}
                <a
                  href="/assets/images/Amit_Adhikary_resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={handleMobileMenuToggle}
                className="relative bg-bg-secondary p-2 rounded-lg text-text-primary hover:text-primary transition-colors duration-300 touch-manipulation hover:scale-105"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-bg-card/95 backdrop-blur-md border-t border-border-color">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300 touch-manipulation hover:translate-x-2 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Resume Button */}
              <a
                href="/assets/images/Amit_Adhikary_resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 w-full px-3 py-3 mt-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all duration-300 touch-manipulation hover:translate-x-2"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar; 