import { api } from '../api/service';
import { CreateRatingOTD } from './interface';

export function createSportRating(data: CreateRatingOTD) {
  return api.post('/player/create-rating', data);
}
