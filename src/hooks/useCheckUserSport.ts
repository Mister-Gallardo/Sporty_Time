import { usePlayerProfile } from '../services/api/hooks';
import { ESport } from '../services/matches/interface';

// check if user passed some sport-questioning (then set it as default in filters or somewhere else)
export const useCheckUserSport = () => {
  const [player] = usePlayerProfile();

  if (player?.ratingPadel) return ESport.PADEL;
  if (player?.ratingTennis) return ESport.TENNIS;
  if (player?.ratingPickleball) return ESport.PICKLEBALL;

  // if none test was passed - set padel as default
  return ESport.PADEL;
};
