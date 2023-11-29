import { api } from '../api/service';

export function createSportRating(data: CreateRatingOTD) {
  const { lessons, level, age, experience, countMatches, fitness, sport } =
    data;
  return api.post('/player/create-rating', {
    sport: sport,
    level: level,
    age: age,
    experience: experience,
    lessons: lessons,
    countMatches: countMatches,
    fitness: fitness,
  });
}
