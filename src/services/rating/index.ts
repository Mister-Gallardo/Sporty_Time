import { api } from '../api/service';
import { CreateRatingOTD } from './interface';

export function createSportRating(data: CreateRatingOTD) {
  // return api.post('/player/create-rating', data);

  const { lessons, level, age, otherSportExp, matchesPerWeek, fitness, sport } =
    data;
  return api.post('/player/create-rating', {
    sport: sport,
    level: level,
    age: age,
    experience: otherSportExp,
    lessons: lessons,
    countMatches: matchesPerWeek,
    fitness: fitness,
  });
}
