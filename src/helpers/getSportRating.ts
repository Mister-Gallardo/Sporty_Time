import { Player } from '../services/user/interface';
import { Sport } from '../types';

export const getSportRating = (player: Player, sport: string) => {
  if (sport === Sport.PADEL) return player.ratingPadel;
  if (sport === Sport.TENNIS) return player.ratingTennis;
  if (sport === Sport.PICKLEBALL) return player.ratingPickleball;
  return 0;
};
