import { ESport } from '../services/matches/interface';

export const getSportName = (sportKey: ESport) => {
  const sport =
    sportKey === ESport.PADEL
      ? 'Падел'
      : sportKey === ESport.TENNIS
      ? 'Теннис'
      : sportKey === ESport.PICKLEBALL
      ? 'Пиклбол'
      : '';

  return sport;
};
