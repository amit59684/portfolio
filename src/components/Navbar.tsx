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
    setIsMobileMenuOpen(false);
    
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

  // Bulletproof inline styles to ensure navbar is always visible
  const navbarContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 999999,
    display: 'block',
    visibility: 'visible',
    opacity: 1,
    transform: 'none',
    pointerEvents: 'auto',
    boxSizing: 'border-box'
  };

  const navbarStyle: React.CSSProperties = {
    width: '100%',
    transition: 'all 0.3s ease',
    background: isScrolled 
      ? 'linear-gradient(145deg, rgba(0, 255, 255, 0.1), rgba(139, 92, 246, 0.1))'
      : 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(15px)',
    borderBottom: isScrolled ? '1px solid rgba(0, 255, 255, 0.3)' : 'none',
    boxShadow: isScrolled ? '0 8px 32px rgba(0, 255, 255, 0.3)' : 'none',
    position: 'relative',
    display: 'block',
    visibility: 'visible',
    opacity: 1,
    transform: 'none'
  };

  return (
    <div style={navbarContainerStyle}>
      <nav style={navbarStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              onClick={() => scrollToSection('home')}
              className="flex-shrink-0 cursor-pointer"
              style={{ transform: 'none' }}
            >
              <div className="flex items-center space-x-1">
                {/* First Name - Amit */}
                <div className="flex">
                  {"Amit".split("").map((letter, index) => (
                    <span
                      key={`amit-${index}`}
                      className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
                      style={{ transform: 'none' }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                
                <span className="text-xl sm:text-2xl font-bold text-white">&nbsp;</span>
                
                {/* Last Name - Adhikary */}
                <div className="flex">
                  {"Adhikary".split("").map((letter, index) => (
                    <span
                      key={`adhikary-${index}`}
                      className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                      style={{ transform: 'none' }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Underline */}
              <div 
                className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-1 w-full"
                style={{ transform: 'none' }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                      activeSection === item.id
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{ transform: 'none' }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                        style={{ transform: 'none' }}
                      />
                    )}
                  </button>
                ))}
                
                {/* Resume Button */}
                <a
                  href="/assets/images/Amit_Adhikary_resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg"
                  style={{ transform: 'none' }}
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
                className="relative bg-gray-800 p-2 rounded-lg text-white hover:text-cyan-400 transition-colors duration-300"
                aria-label="Toggle mobile menu"
                style={{ transform: 'none' }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden border-t border-gray-700"
            style={{
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(15px)',
              transform: 'none'
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  style={{ transform: 'none' }}
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
                className="flex items-center space-x-2 w-full px-3 py-3 mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium transition-all duration-300"
                style={{ transform: 'none' }}
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