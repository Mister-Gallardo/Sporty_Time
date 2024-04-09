import { ESport } from '../services/matches/interface';
import { Player } from '../services/user/interface';

export const getSportRating = (player?: Player, sport?: string) => {
  if (!player || !sport) return 0;

  if (sport === ESport.PADEL) return player.ratingPadel;
  if (sport === ESport.TENNIS) return player.ratingTennis;
  if (sport === ESport.PICKLEBALL) return player.ratingPickleball;
  return 0;
};
