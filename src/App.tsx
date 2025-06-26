import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import BackToTop from './components/BackToTop';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import CursorTrail from './components/CursorTrail';
import SoundToggle from './components/SoundToggle';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import { SoundProvider } from './context/SoundContext';
import './App.css';

function App() {
  return (
    <SoundProvider>
      <div className="App">
        <LoadingScreen />
        <CursorTrail />
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <SocialSidebar />
        <BackToTop />
        <SoundToggle />
        <PWAInstallPrompt />
      </div>
    </SoundProvider>
  );
}

export default App;
