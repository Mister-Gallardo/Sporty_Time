import { ELeveling } from '../pages/question-form/questions';
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
    level === ELeveling.NONE || level === ELeveling.BEGINNER
      ? 0
      : level === ELeveling.INTERMEDIATE
      ? 1
      : level === ELeveling.HIGHT_INTERMEDIATE
      ? 2
      : level === ELeveling.ADVANCED
      ? 3
      : 4;
  return { sportIndex, levelIndex };
};
