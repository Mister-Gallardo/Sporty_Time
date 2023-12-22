import { MatchData } from '../matches/interface';
import { User } from '../user/interface';

export interface IAvailableTime {
  slotId: number;
  playtime: number;
  time: string;
}

export interface Club {
  id: number;
  title: string;
  img: string;
  user: User;
  courts: Court[];
  createdAt: Date;
  updatedAt: Date;
  availableSlots?: Record<
    string,
    {
      available: Omit<Court, 'slots'>[];
      booked: Omit<Court, 'slots'>[];
    }
  >;
  availableTimes?: string[] | IAvailableTime[];
  minPrice: number;
}

export interface Court {
  id: number;
  title: string;
  address: string;

  sport: CourtTypes;

  location: string;

  price: number;

  club: Club;

  options: { playtime: number; price: number }[];

  slotId: number;

  tags: Tag[];

  createdAt: Date;

  updatedAt: Date;
}

export interface Tag {
  id: number;

  title: string;

  courts: Court[];

  createdAt: Date;

  updatedAt: Date;
}

export enum CourtTypes {
  PADEL = 'PADEL',
  TENNIS = 'TENNIS',
}

export interface Slot {
  id: number;

  court: Court;

  matches: MatchData[];

  time: string;

  createdAt: Date;

  updatedAt: Date;
}

export interface CourtSlot {
  playTime: number;
  slotId: number;
  time: string;
}
