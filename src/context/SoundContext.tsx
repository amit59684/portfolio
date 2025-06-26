import React, { createContext, useContext, useState, useCallback } from 'react';

interface SoundContextType {
  isTypingSoundEnabled: boolean;
  toggleTypingSound: () => void;
  playTypingSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
};

interface SoundProviderProps {
  children: React.ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [isTypingSoundEnabled, setIsTypingSoundEnabled] = useState(false);

  const toggleTypingSound = useCallback(() => {
    setIsTypingSoundEnabled(prev => !prev);
  }, []);

  const playTypingSound = useCallback(() => {
    if (!isTypingSoundEnabled) return;

    // Create multiple typing sound frequencies for variety
    const frequencies = [800, 900, 1000, 1100, 1200];
    const frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = 'sine';

      // Short, subtle typing sound
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Fallback for browsers that don't support Web Audio API
      console.log('Web Audio API not supported');
    }
  }, [isTypingSoundEnabled]);

  const value: SoundContextType = {
    isTypingSoundEnabled,
    toggleTypingSound,
    playTypingSound,
  };

  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
}; 