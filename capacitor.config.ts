import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ru.sportytime',
  appName: 'frontend',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
