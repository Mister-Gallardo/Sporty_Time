import { usePlayerProfile } from '../services/api/hooks';
import { Sport } from '../types';

// check if user passed some sport-questioning (then set it as default in filters or somewhere else)
export const useCheckUserSport = () => {
  const [player] = usePlayerProfile();

  if (player?.ratingPadel) return Sport.PADEL;
  if (player?.ratingTennis) return Sport.TENNIS;
  if (player?.ratingPickleball) return Sport.PICKLEBALL;

  // if none test was passed - set padel as default
  return Sport.PADEL;
};
