import { ESport } from './../services/matches/interface';

export const getSportAndLevel = (sport: string, level: string) => {
  const sportIndex =
    sport === ESport.PADEL
      ? 0
      : sport === ESport.TENNIS
      ? 1
      : sport === ESport.PICKLEBALL
      ? 2
      : null;
  const levelIndex =
    level === 'none' || level === 'beginner'
      ? 0
      : level === 'intermediate'
      ? 1
      : level === 'intermediate hight'
      ? 2
      : level === 'advanced'
      ? 3
      : 4;
  return { sportIndex, levelIndex };
};
