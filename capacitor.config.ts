import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.amitadhikary.portfolio',
  appName: 'Amit Portfolio',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    StatusBar: {
      backgroundColor: '#0f0f23',
      style: 'dark',
      overlaysWebView: false
    },
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    },
    App: {
      launchShowDuration: 0
    }
  },
  android: {
    allowMixedContent: true,
    backgroundColor: '#0f0f23',
    webContentsDebuggingEnabled: true
  }
};

export default config;
