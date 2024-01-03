import { Sport } from '../types';

export const getSportName = (sportKey: Sport) => {
  const sport =
    sportKey === Sport.PADEL
      ? 'Падел'
      : sportKey === Sport.TENNIS
      ? 'Теннис'
      : sportKey === Sport.PICKLEBALL
      ? 'Пиклбол'
      : '';

  return sport;
};
