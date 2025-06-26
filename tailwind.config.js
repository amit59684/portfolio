/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gaming color palette
        primary: '#00ffff', // Cyan neon
        secondary: '#ff0080', // Magenta neon
        accent: '#ffff00', // Electric yellow
        success: '#00ff00', // Green neon
        warning: '#ff8000', // Orange neon
        danger: '#ff0040', // Red neon
        
        // Dark gaming backgrounds
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#111118',
        'bg-card': '#1a1a2e',
        'bg-card-hover': '#252545',
        
        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0c0',
        'text-muted': '#808090',
        
        // Border and UI
        'border-color': '#333344',
        'border-glow': '#00ffff40',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'sans': ['Rajdhani', 'ui-sans-serif', 'system-ui'],
        'mono': ['Orbitron', 'ui-monospace', 'SFMono-Regular'],
      },
      fontSize: {
        'gaming-xs': ['0.7rem', { lineHeight: '1rem', letterSpacing: '0.1em' }],
        'gaming-sm': ['0.8rem', { lineHeight: '1.2rem', letterSpacing: '0.05em' }],
        'gaming-base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.025em' }],
        'gaming-lg': ['1.2rem', { lineHeight: '1.7rem', letterSpacing: '0.025em' }],
        'gaming-xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.05em' }],
        'gaming-2xl': ['2rem', { lineHeight: '2.5rem', letterSpacing: '0.05em' }],
        'gaming-3xl': ['2.5rem', { lineHeight: '3rem', letterSpacing: '0.075em' }],
        'gaming-4xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '0.1em' }],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 128, 0.5)',
        'neon-yellow': '0 0 20px rgba(255, 255, 0, 0.5)',
        'neon-green': '0 0 20px rgba(0, 255, 0, 0.5)',
        'neon-strong': '0 0 40px rgba(0, 255, 255, 0.8)',
        'gaming-card': '0 0 30px rgba(0, 255, 255, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)',
        'gaming-hover': '0 0 50px rgba(0, 255, 255, 0.8), 0 10px 30px rgba(0, 0, 0, 0.5)',
        'gaming-3d': '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 255, 0.2)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 10s linear infinite',
        'bounce-3d': 'bounce-3d 1s infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'holographic': 'holographic 3s ease-in-out infinite',
        'glitch': 'glitch 2s ease-in-out infinite',
        'gaming-spin': 'gaming-spin 4s linear infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)',
            transform: 'scale(1.05)'
          },
        },
        'glow': {
          'from': {
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          },
          'to': {
            textShadow: '0 0 40px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 255, 255, 0.5)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'rotate-3d': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'rotateX(15deg) rotateY(90deg)' },
          '50%': { transform: 'rotateX(0deg) rotateY(180deg)' },
          '75%': { transform: 'rotateX(-15deg) rotateY(270deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(360deg)' },
        },
        'bounce-3d': {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translate3d(0, 0, 0) rotateX(0deg)',
          },
          '40%, 43%': {
            transform: 'translate3d(0, -30px, 0) rotateX(-10deg)',
          },
          '70%': {
            transform: 'translate3d(0, -15px, 0) rotateX(5deg)',
          },
          '90%': {
            transform: 'translate3d(0, -4px, 0) rotateX(-2deg)',
          },
        },
        'grid-move': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        'holographic': {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 128, 0.1))',
          },
          '50%': { 
            background: 'linear-gradient(45deg, rgba(255, 0, 128, 0.1), rgba(255, 255, 0, 0.1))',
          },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'gaming-spin': {
          '0%': { 
            transform: 'rotate(0deg) scale(1)',
            filter: 'hue-rotate(0deg)',
          },
          '50%': { 
            transform: 'rotate(180deg) scale(1.1)',
            filter: 'hue-rotate(180deg)',
          },
          '100%': { 
            transform: 'rotate(360deg) scale(1)',
            filter: 'hue-rotate(360deg)',
          },
        },
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backdropBlur: {
        'gaming': '20px',
      },
      borderRadius: {
        'gaming': '20px',
        'gaming-lg': '30px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'gaming': '1400px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    // Custom plugin for 3D transforms
    function({ addUtilities }) {
      const newUtilities = {
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.perspective-1500': {
          'perspective': '1500px',
        },
        '.perspective-2000': {
          'perspective': '2000px',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.gaming-gradient': {
          'background': 'linear-gradient(45deg, #00ffff, #ff0080, #ffff00, #00ff00)',
          'background-size': '400% 400%',
          'animation': 'gradient-shift 3s ease-in-out infinite',
        },
        '.text-gaming-gradient': {
          'background': 'linear-gradient(45deg, #00ffff, #ff0080, #ffff00)',
          'background-size': '300% 300%',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'animation': 'gradient-shift 3s ease-in-out infinite',
        },
        '.border-gaming': {
          'border-image': 'linear-gradient(45deg, #00ffff, #ff0080, #ffff00, #00ffff) 1',
        },
        '.gaming-card-hover': {
          'transition': 'all 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-10px) rotateX(5deg) rotateY(5deg)',
            'box-shadow': '0 0 30px rgba(0, 255, 255, 0.5), 0 20px 40px rgba(0, 0, 0, 0.3)',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
} 