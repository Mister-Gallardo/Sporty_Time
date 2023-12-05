import { Club } from '../club/interface';

export enum Role {
  PLAYER = 'PLAYER',
  CLUB = 'CLUB',
  TRAINER = 'TRAINER',
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface Player {
  id: number;

  ratingPadel: number;

  ratingPickleball: number;

  ratingTennis: number;

  scoresPadel: number;

  scoresPickleball: number;

  scoresTennis: number;

  user: User;

  createdAt: Date;

  updatedAt: Date;

  mark?: boolean;
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

  avatarUrl: string;
}
