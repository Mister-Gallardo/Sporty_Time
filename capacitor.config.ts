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
      updateUrl: 'https://app.sportytime.ru/api/versions/latest',
      version,
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;
