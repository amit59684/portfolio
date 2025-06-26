/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Gaming Color Palette
      colors: {
        // Gaming Neon Colors
        'neon-cyan': '#00ffff',
        'neon-purple': '#8b5cf6',
        'neon-pink': '#ff1493',
        'neon-green': '#00ff41',
        'neon-orange': '#ff6600',
        'electric-blue': '#0066ff',
        
        // Enhanced Dark Theme
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#1a1a2e',
        'bg-card': '#16213e',
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
        'border-color': 'rgba(255, 255, 255, 0.1)',
        
        // Gaming Primary/Secondary
        primary: '#00ffff',
        secondary: '#8b5cf6',
      },
      
      // Gaming Typography
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        'gaming': ['Orbitron', 'sans-serif'],
      },
      
      // 3D Gaming Animations
      animation: {
        'float3d': 'float3d 6s ease-in-out infinite',
        'pulse3d': 'pulse3d 2s ease-in-out infinite',
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite',
        'hologram-flicker': 'hologramFlicker 3s ease-in-out infinite',
        'cyber-glitch': 'cyberpunkGlitch 0.1s ease-in-out infinite',
        'matrix-rain': 'matrixRain 4s linear infinite',
        'rotate-y': 'rotateY360 20s linear infinite',
        'rotate-x': 'rotateX360 15s linear infinite',
      },
      
      // Gaming Transforms
      transformStyle: {
        '3d': 'preserve-3d',
      },
      
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      
      // Gaming Gradients
      backgroundImage: {
        'hologram': 'linear-gradient(45deg, #00ffff, #8b5cf6, #ff1493)',
        'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
        'gaming-radial': 'radial-gradient(ellipse at center, #0a0a0f 0%, #000000 100%)',
      },
      
      // Gaming Shadows
      boxShadow: {
        'neon': '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor',
        'cyber': '0 8px 32px rgba(0, 255, 255, 0.3)',
        'hologram': '0 0 50px rgba(139, 92, 246, 0.5)',
        'gaming': '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 255, 255, 0.1)',
      },
      
      // Gaming Border Radius
      borderRadius: {
        'gaming': '15px',
        'cyber': '20px',
      },
      
      // Gaming Backdrop Blur
      backdropBlur: {
        'gaming': '15px',
      },
      
      // Gaming Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Gaming Z-Index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '9999': '9999',
      },
      
      // Gaming Scale
      scale: {
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
      },
      
      // Gaming Rotate
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '5': '5deg',
      },
      
      // Gaming Skew
      skew: {
        '1': '1deg',
        '2': '2deg',
        '5': '5deg',
      },
    },
  },
  plugins: [
    // Gaming 3D Transform Plugin
    function({ addUtilities }) {
      const newUtilities = {
        '.transform-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.perspective-container': {
          'perspective': '1000px',
          'transform-style': 'preserve-3d',
        },
        '.gaming-card': {
          'background': 'linear-gradient(145deg, rgba(0, 255, 255, 0.1), rgba(139, 92, 246, 0.1))',
          'border': '1px solid rgba(0, 255, 255, 0.3)',
          'backdrop-filter': 'blur(15px)',
          'border-radius': '15px',
          'position': 'relative',
          'overflow': 'hidden',
          'transition': 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        '.neon-button': {
          'background': 'linear-gradient(45deg, #00ffff, #8b5cf6)',
          'border': 'none',
          'color': 'white',
          'padding': '12px 24px',
          'border-radius': '25px',
          'font-weight': '600',
          'text-transform': 'uppercase',
          'letter-spacing': '1px',
          'position': 'relative',
          'overflow': 'hidden',
          'transition': 'all 0.3s ease',
          'box-shadow': '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor',
        },
        '.hologram-text': {
          'background': 'linear-gradient(45deg, #00ffff, #8b5cf6, #ff1493)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'animation': 'hologramFlicker 3s infinite',
        },
        '.cyber-grid': {
          'background-image': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          'background-size': '50px 50px',
        },
        '.particle-3d': {
          'position': 'absolute',
          'width': '3px',
          'height': '3px',
          'background': '#00ffff',
          'border-radius': '50%',
          'box-shadow': '0 0 20px currentColor',
        },
      }
      addUtilities(newUtilities)
    },
    
    // Line Clamp Plugin
    function({ addUtilities }) {
      addUtilities({
        '.line-clamp-1': {
          'overflow': 'hidden',
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '1',
        },
        '.line-clamp-2': {
          'overflow': 'hidden',
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.line-clamp-3': {
          'overflow': 'hidden',
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
      })
    }
  ],
} 