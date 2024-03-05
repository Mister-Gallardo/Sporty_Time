import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './theme/variables.css';
import { isPlatform } from '@ionic/react';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { Dialog } from '@capacitor/dialog';
import { MapComponentsProvider } from '@mapcomponents/react-maplibre';

const container = document.getElementById('root');
const root = createRoot(container!);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MapComponentsProvider>
          <App />
        </MapComponentsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

if (isPlatform('ios') || isPlatform('android')) {
  CapacitorUpdater.notifyAppReady();
  CapacitorUpdater.addListener('updateAvailable', async (res) => {
    try {
      const { value } = await Dialog.confirm({
        title: 'Доступно обновление!',
        message: `Версия ${res.bundle.version} готова к установке. Перезагруть приложение сейчас?`,
      });
      if (value) CapacitorUpdater.set(res.bundle);
    } catch (error) {
      console.log(error);
    }
  });
}
