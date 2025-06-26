import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

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

  const navbarContent = (
    <div 
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        width: '100%',
        zIndex: 2147483647, // Maximum z-index
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        transform: 'none',
        pointerEvents: 'auto',
        isolation: 'isolate',
      }}
    >
      <nav
        style={{
          width: '100%',
          transition: 'all 0.3s ease',
          background: isScrolled 
            ? 'linear-gradient(145deg, rgba(0, 255, 255, 0.1), rgba(139, 92, 246, 0.1))'
            : 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          borderBottom: isScrolled ? '1px solid rgba(0, 255, 255, 0.3)' : 'none',
          boxShadow: isScrolled ? '0 8px 32px rgba(0, 255, 255, 0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              onClick={() => scrollToSection('home')}
              className="flex-shrink-0 cursor-pointer"
            >
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {"Amit".split("").map((letter, index) => (
                    <span
                      key={`amit-${index}`}
                      className="text-xl sm:text-2xl font-bold"
                      style={{ color: '#ffffff' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00bfff'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                
                <span className="text-xl sm:text-2xl font-bold" style={{ color: '#ffffff' }}>&nbsp;</span>
                
                <div className="flex">
                  {"Adhikary".split("").map((letter, index) => (
                    <span
                      key={`adhikary-${index}`}
                      className="text-xl sm:text-2xl font-bold"
                      style={{
                        background: 'linear-gradient(to right, #00bfff, #9370db)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
              
              <div 
                style={{
                  height: '2px',
                  background: 'linear-gradient(to right, #00bfff, #9370db)',
                  borderRadius: '9999px',
                  marginTop: '4px',
                  width: '100%'
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-3 py-2 text-sm font-medium transition-all duration-300 relative"
                    style={{
                      color: activeSection === item.id ? '#00bfff' : '#d1d5db',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = activeSection === item.id ? '#00bfff' : '#d1d5db'}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: '#00bfff',
                          borderRadius: '9999px'
                        }}
                      />
                    )}
                  </button>
                ))}
                
                <a
                  href="/assets/images/Amit_Adhikary_resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2"
                  style={{
                    background: 'linear-gradient(to right, #06b6d4, #8b5cf6)',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #0891b2, #7c3aed)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #06b6d4, #8b5cf6)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Download size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 rounded-lg text-white transition-colors duration-300"
                style={{ background: '#1f2937' }}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden"
            style={{
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              borderTop: '1px solid #374151'
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300"
                  style={{
                    color: activeSection === item.id ? '#00bfff' : '#d1d5db',
                    background: activeSection === item.id ? 'rgba(0, 191, 255, 0.1)' : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
              
              <a
                href="/assets/images/Amit_Adhikary_resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 w-full px-3 py-3 mt-4 text-white rounded-lg font-medium transition-all duration-300"
                style={{
                  background: 'linear-gradient(to right, #06b6d4, #8b5cf6)'
                }}
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

  // Use portal to render navbar directly to body
  if (!mounted) return null;
  
  return ReactDOM.createPortal(
    navbarContent,
    document.body
  );
};

export default Navbar; 