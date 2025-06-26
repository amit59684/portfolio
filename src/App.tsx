import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import BackToTop from './components/BackToTop';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <SocialSidebar />
      <BackToTop />
      <PWAInstallPrompt />
    </div>
  );
}

export default App;
