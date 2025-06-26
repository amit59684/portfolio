import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, Monitor, Zap } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isAppInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                          (window.navigator as any).standalone === true;
    
    setIsInstalled(isAppInstalled);

    // Detect iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const installEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(installEvent);
      
      // Show the install prompt after a delay
      setTimeout(() => {
        setShowInstallPrompt(true);
      }, 3000); // Show after 3 seconds
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // For iOS, show install instructions after some time if not installed
    if (iOS && !isAppInstalled) {
      const timer = setTimeout(() => {
        setShowIOSInstructions(true);
      }, 5000); // Show after 5 seconds on iOS

      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      // Show the install prompt
      await deferredPrompt.prompt();
      
      // Wait for the user's response
      const result = await deferredPrompt.userChoice;
      
      if (result.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setShowInstallPrompt(false);
      } else {
        console.log('User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
    } catch (error) {
      console.error('Error installing PWA:', error);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setShowIOSInstructions(false);
    
    // Show again after 24 hours
    localStorage.setItem('pwa-dismissed', Date.now().toString());
  };

  // Don't show if already installed or dismissed recently
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const hoursSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60);
      
      if (hoursSinceDismissed < 24) {
        setShowInstallPrompt(false);
        setShowIOSInstructions(false);
      }
    }
  }, []);

  // Android/Desktop Install Prompt
  const InstallPrompt = () => (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
    >
      <div className="bg-gradient-to-r from-primary to-secondary p-1 rounded-2xl shadow-2xl">
        <div className="bg-bg-primary rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Download className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-text-primary text-lg">Install App</h3>
                <p className="text-text-secondary text-sm">Add to home screen</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDismiss}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={20} />
            </motion.button>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center space-x-2 text-text-secondary text-sm">
              <Zap size={16} className="text-primary" />
              <span>Instant loading & offline access</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary text-sm">
              <Smartphone size={16} className="text-primary" />
              <span>Native app-like experience</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary text-sm">
              <Monitor size={16} className="text-primary" />
              <span>Works on desktop & mobile</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleInstallClick}
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg"
            >
              <Download size={16} />
              <span>Install Now</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDismiss}
              className="px-4 py-3 border border-border-color rounded-xl text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              Later
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // iOS Install Instructions
  const IOSInstructions = () => (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 left-4 right-4 z-50"
    >
      <div className="bg-gradient-to-r from-primary to-secondary p-1 rounded-2xl shadow-2xl">
        <div className="bg-bg-primary rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Smartphone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-text-primary text-lg">Install on iPhone</h3>
                <p className="text-text-secondary text-sm">Add to Home Screen</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDismiss}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={20} />
            </motion.button>
          </div>

          <div className="space-y-3 mb-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs">1</div>
              <span>Tap the <strong>Share</strong> button at the bottom of Safari</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs">2</div>
              <span>Select <strong>"Add to Home Screen"</strong></span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs">3</div>
              <span>Tap <strong>"Add"</strong> to install</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDismiss}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-xl font-semibold text-sm"
          >
            Got it!
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  // Don't render anything if app is already installed
  if (isInstalled) return null;

  return (
    <AnimatePresence>
      {showInstallPrompt && deferredPrompt && !isIOS && <InstallPrompt />}
      {showIOSInstructions && isIOS && <IOSInstructions />}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt; 