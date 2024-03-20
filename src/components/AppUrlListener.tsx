import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { App, URLOpenListenerEvent } from '@capacitor/app';

const AppUrlListener: React.FC<any> = () => {
  const history = useHistory();

  useEffect(() => {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      const domain = 'sportytime.ru';
      const path = event.url.split(domain).pop();
      console.log('link: ', path);
      if (path) {
        history.push(path);
      }
      // If no match, do nothing - let regular routing
      // logic take over
    });
  }, []);

  return null;
};

export default AppUrlListener;
