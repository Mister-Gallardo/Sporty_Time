import { isPlatform } from '@ionic/react';

export const timeToDate = (time: string) => {
  return Date.parse(`01-01-1970 ${time}Z`);
};

export const gameDateToDate = (gameDate: string, time: string) => {
  return Date.parse(`${gameDate} ${time}Z`);
};

export const isMobile = () => !isPlatform('mobileweb') && isPlatform('mobile');
