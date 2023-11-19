import { Match } from '../matches/interface';
import { User } from '../user/interface';

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

  availableTimes?: string[];
  minPrice: number;
}

export interface Court {
  id: number;

  address: string;

  sport: CourtTypes;

  location: string;

  price: number;

  club: Club;

  slots: Slot[];

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

  matches: Match[];

  time: string;

  createdAt: Date;

  updatedAt: Date;
}
