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

export interface MatchMember {
  id: number;
  confirmMatchResults: boolean;
  team: string;
  createdAt: Date;
  updatedAt: Date;
  player: Player;
}

export interface MatchMemberShort {
  id: number;
  team: string;
  player: {
    ratingTennis: number;
    user: { avatarUrl: string; firstname: string };
  };
}

export interface UserProfile {
  countMatches: number;
  user: User;
}
