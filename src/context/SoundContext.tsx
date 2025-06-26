import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

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
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  // Preload sound files (if you want to use actual sound files)
  const initializeAudioFiles = useCallback(() => {
    if (audioRefs.current.length === 0) {
      // Option 1: Use actual sound files (place these in public/sounds/)
      const soundFiles = [
        '/sounds/key1.mp3',
        '/sounds/key2.mp3', 
        '/sounds/key3.mp3',
        '/sounds/key4.mp3',
        '/sounds/key5.mp3'
      ];

      soundFiles.forEach((src) => {
        const audio = new Audio();
        audio.src = src;
        audio.volume = 0.3;
        audio.preload = 'auto';
        // Handle load errors gracefully
        audio.onerror = () => {
          console.log(`Sound file not found: ${src}, using synthetic sound instead`);
        };
        audioRefs.current.push(audio);
      });
    }
  }, []);

  const toggleTypingSound = useCallback(() => {
    setIsTypingSoundEnabled(prev => {
      const newValue = !prev;
      if (newValue) {
        initializeAudioFiles();
      }
      return newValue;
    });
  }, [initializeAudioFiles]);

  const playTypingSound = useCallback(() => {
    if (!isTypingSoundEnabled) return;

    // Option 1: Try to play actual sound files first
    if (audioRefs.current.length > 0) {
      const randomAudio = audioRefs.current[Math.floor(Math.random() * audioRefs.current.length)];
      if (randomAudio && randomAudio.readyState >= 2) { // HAVE_CURRENT_DATA
        randomAudio.currentTime = 0;
        randomAudio.play().catch(() => {
          // If file playback fails, fall back to synthetic sound
          playSyntheticTypingSound();
        });
        return;
      }
    }

    // Option 2: Fallback to synthetic sound generation
    playSyntheticTypingSound();
  }, [isTypingSoundEnabled]);

  const playSyntheticTypingSound = useCallback(() => {
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
      gainNode.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.08);
    } catch (error) {
      // Fallback for browsers that don't support Web Audio API
      console.log('Web Audio API not supported');
    }
  }, []);

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