import { Club } from '../club/interface';

export enum EEditProfileErrors {
  FIRSTNAME = 'Укажите имя',
  LASTNAME = 'Укажите фамилию',
  EMAIL = 'Укажите email',
  PASSWORD = 'Пароль не может быть пустым',
}

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

export interface IFormats {
  png?: string;
  large?: string;
  small?: string;
  medium?: string;
}
export interface IMedia {
  id: number;
  formats: IFormats;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
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
  fullname: string;
  email: string;
  gender: string;
  roles: Role[];
  avatar: IMedia;
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
  avatar?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  gender?: string;
}
