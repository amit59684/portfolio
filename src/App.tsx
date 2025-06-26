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
    <>
      <LoadingScreen />
      <Navbar />
      <BackToTop />
      <div className="App">
        <ParticleBackground />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <SocialSidebar />
        <PWAInstallPrompt />
      </div>
    </>
  );
}

export default App;
