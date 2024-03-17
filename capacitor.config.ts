import { CapacitorConfig } from '@capacitor/cli';
import { version } from './package.json';

const config: CapacitorConfig = {
  appId: 'ru.sportytime',
  appName: 'frontend',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    CapacitorUpdater: {
      updateUrl: "https://sportytime.ru/api/versions/latest",
      version
    }
  }
};

export default config;
