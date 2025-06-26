# 🚀 Modern React Portfolio - Amit Adhikary

A stunning, modern portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This is a complete redesign and upgrade of the original HTML/CSS/JavaScript portfolio into a modern, animated React application.

## ✨ Features

### 🎨 Modern Design & Animations
- **Dark Theme**: Elegant dark color scheme with glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Particle Background**: Interactive particle system with mouse tracking
- **Typing Effect**: Dynamic typing animation for role titles
- **Scroll Animations**: Elements animate into view using Intersection Observer
- **Hover Effects**: Sophisticated hover states and micro-interactions

### 📱 Responsive & Interactive
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Touch Friendly**: Large tap targets and touch gestures support
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Screen**: Beautiful animated loading experience

### 🎯 Modern UX/UX Practices
- **Accessibility**: WCAG compliant with proper focus management
- **Performance Optimized**: Lazy loading and optimized animations
- **SEO Ready**: Semantic HTML structure
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🛠 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful, customizable SVG icons
- **Vite/Create React App** - Fast development and build tooling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the portfolio

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎨 Customization

### Colors & Theme
The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: '#6366f1',        // Main accent color
  secondary: '#f59e0b',      // Secondary accent
  'bg-primary': '#0f0f23',   // Main background
  'bg-secondary': '#1a1a3e', // Secondary background
  // ... more colors
}
```

### Content Updates
- **Personal Information**: Update content in component files
- **Projects**: Modify the projects array in `src/components/Projects.tsx`
- **Skills**: Update skills data in `src/components/Skills.tsx`
- **Resume**: Replace the PDF file in `public/assets/images/`

### Assets
- **Profile Image**: Replace `public/assets/images/Pi7_Passport_Photo (1).jpeg`
- **Project Images**: Update images in `public/assets/images/Projects/`
- **Skill Icons**: Modify icons in `public/assets/images/TS/` and `public/assets/images/SS/`

## 📂 Project Structure

```
modern-portfolio/
├── public/
│   ├── assets/
│   │   └── images/          # All images and assets
│   ├── index.html
│   └── ...
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── SocialSidebar.tsx
│   │   └── BackToTop.tsx
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main App component
│   ├── App.css             # Additional styles
│   ├── index.css           # Global styles with Tailwind
│   └── index.tsx           # React entry point
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json
└── README.md
```

## 🎯 Component Overview

### Core Components
- **LoadingScreen**: Animated loading experience with progress bar
- **ParticleBackground**: Interactive particle system using Canvas API
- **Navbar**: Responsive navigation with smooth scrolling
- **Hero**: Landing section with typing animation and profile image
- **About**: Personal information with animated statistics
- **Projects**: Portfolio projects with interactive cards
- **Skills**: Technical and soft skills with progress bars
- **Contact**: Contact form with floating labels
- **Footer**: Footer with social links and credits

### UI Components
- **SocialSidebar**: Floating social media links
- **BackToTop**: Scroll progress indicator and back-to-top functionality

## 🎬 Animations & Effects

### Framer Motion Features
- **Page transitions** with stagger children animations
- **Scroll-triggered animations** using `useInView` hook
- **Hover and tap gestures** for interactive elements
- **Layout animations** for smooth state changes
- **Spring physics** for natural motion feel

### Custom Animations
- **Particle system** with mouse interaction
- **Typing effect** with cursor blink animation
- **Progress bars** with smooth fill animations
- **Counter animations** for statistics
- **Floating elements** with infinite loops

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Custom responsive features:
- Mobile-optimized navigation
- Touch-friendly interactions
- Scalable typography
- Flexible grid layouts

## ♿ Accessibility Features

- **Semantic HTML** structure
- **ARIA labels** and roles
- **Keyboard navigation** support
- **Focus management** with visible focus indicators
- **Reduced motion** support for accessibility preferences
- **Screen reader** optimized content
- **Color contrast** compliance

## 🚀 Performance Optimizations

- **Lazy loading** for images and components
- **Debounced scroll handlers** for smooth performance
- **Optimized animations** using hardware acceleration
- **Code splitting** for faster initial load
- **Asset optimization** with proper sizing and formats

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Modern React patterns** with hooks and functional components

## 🌟 Key Improvements from Original

### Technical Upgrades
- **React 18** with modern hooks and patterns
- **TypeScript** for better development experience
- **Tailwind CSS** for maintainable styling
- **Framer Motion** for professional animations
- **Component-based architecture** for reusability

### Design Enhancements
- **Modern glassmorphism** effects
- **Enhanced animations** and micro-interactions
- **Better typography** with custom font stacks
- **Improved color scheme** with gradients
- **Professional hover states** and transitions

### User Experience
- **Faster loading** with optimized assets
- **Smoother animations** with hardware acceleration
- **Better mobile experience** with touch optimizations
- **Enhanced accessibility** features
- **Improved navigation** with scroll indicators

## 📞 Contact Information

- **Email**: amitadhikary59684@gmail.com
- **GitHub**: [github.com/amit59684](https://github.com/amit59684)
- **LinkedIn**: [linkedin.com/in/amit-adhikary-4394b8167](https://www.linkedin.com/in/amit-adhikary-4394b8167/)
- **LeetCode**: [leetcode.com/u/amitadhikary](https://leetcode.com/u/amitadhikary/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using modern web technologies**

*Last updated: December 2024*
