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
}

export interface MatchPlayer extends Player {
  mark?: boolean;
  paid?: number;
  isOwner?: boolean;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  roles: Role[];
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  player: Player;
  club: Club;
}

export interface UserProfile {
  countMatches: number;
  user: User;
}

export interface EditUserProfile {
  image?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  gender?: string;
}
