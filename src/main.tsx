import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { Dialog } from '@capacitor/dialog';
import './theme/variables.css';
import { isPlatform } from '@ionic/react';

const container = document.getElementById('root');
const root = createRoot(container!);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

if (isPlatform('ios') || isPlatform('android')) {
  CapacitorUpdater.addListener('updateAvailable', async (res) => {
    try {
      const { value } = await Dialog.confirm({
        title: 'Доступно обновление!',
        message: `Версия ${res.bundle.version} готова к загрузке. Начать загрузку сейчас?`,
      });

      if (value) CapacitorUpdater.set(res.bundle);
    } catch (error) {
      console.log(error);
    }
  });

  CapacitorUpdater.notifyAppReady();
}
