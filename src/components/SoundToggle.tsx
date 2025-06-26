import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useSoundContext } from '../context/SoundContext';

const SoundToggle: React.FC = () => {
  const { isTypingSoundEnabled, toggleTypingSound } = useSoundContext();

  return (
    <motion.button
      onClick={toggleTypingSound}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-24 right-8 z-40 p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
        isTypingSoundEnabled
          ? 'bg-primary/20 border-primary/50 text-primary shadow-lg shadow-primary/25'
          : 'bg-bg-card/60 border-border-color text-text-secondary hover:text-text-primary'
      }`}
      title={`${isTypingSoundEnabled ? 'Disable' : 'Enable'} typing sounds`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isTypingSoundEnabled ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isTypingSoundEnabled ? (
          <Volume2 size={20} />
        ) : (
          <VolumeX size={20} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default SoundToggle; 