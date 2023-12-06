import { Court, Slot } from '../club/interface';
import { Player } from '../user/interface';

export interface Match {
  id: number;

  slot: Slot;

  gameDate: Date;

  matchBookings: MatchBooking[];

  createdAt: Date;

  updatedAt: Date;
}

export interface MatchBooking {
  id: number;

  confirmMatchResults: boolean;

  team: string;

  player: Player;

  updatedAt: string;

  createdAt: string;

  status?: string;
}

export interface AvailableMatch {
  id: number;

  title: string;

  confirmMatchResults: boolean;

  gameDate: string;

  price: number;

  minutes: number;

  matchBookings: MatchBooking[];

  slot: {
    id: number;
    time: 'string';
    updatedAt: string;
    createdAt: string;
    court: Court;
  };

  matchResults: any;

  ratingFrom: number;

  ratingTo: number;

  img: string;

  sport: string;

  time: string;

  createdAt: string;

  updatedAt: string;

  winningTeam: string;

  type: string;

  timeExpires: string;
}
[];

export interface CreateMatchDTO {
  selectedDate: Date;
  slotId: number;
  ratingFrom: number;
  reatingTo: number;
  playTime: number;
  sport: string;
}

export interface JoinMatchDTO {
  matchId: number;
  team: string;
}

export interface UploadResultsDTO {
  matchId: number;
  matchResults: number[][];
}
