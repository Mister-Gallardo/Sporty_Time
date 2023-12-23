export interface CreateRatingOTD {
  sport: number;
  level: number;
  isFederated?: number;
  federateCategory?: number;
  licenseNumber?: number;
  competeLevel?: number;
  gender?: number;
  age?: number;
  otherSportExp?: number;
  matchesPerWeek?: number;
  matchesPerMonth?: number;
  lessons?: number;
  fitness?: number;
  howLongPlaying?: number;
}
