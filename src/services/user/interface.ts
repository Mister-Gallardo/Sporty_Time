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
  createdAt: Date;
  updatedAt: Date;
  user?: User;

  mark?: boolean;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  roles: Role[];
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;
  player: Player;
  club: Club;
}

export interface UserProfile {
  countMatches: number;
  user: User;
}
