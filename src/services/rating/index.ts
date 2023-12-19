import { api } from '../api/service';

export function createSportRating(data: CreateRatingOTD) {
  return api.post('/player/create-rating', data);
}
