import { Club, Court } from '../club/interface';
import { MatchBooking } from '../matches/interface';

export enum Role {
  PLAYER = 'PLAYER',
  CLUB = 'CLUB',
  TRAINER = 'TRAINER',
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface Player {
  id: number;

  user: User;

  courts: Court[];

  matchBookings: MatchBooking[];

  createdAt: Date;

  updatedAt: Date;
}

export interface User {
  id: number;

  firstname: string;

  lastname: string;

  email: string;

  password: string;

  roles: Role[];

  player: Player;

  club: Club;

  createdAt: Date;

  updatedAt: Date;
}
