import { Slot } from '../club/interface';
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

  player: Player;

  match: Match;

  createdAt: Date;

  updatedAt: Date;
}

export interface AvailableMatch {
  id: number;

  title: string;

  confirmMatchResults: boolean;

  gameDate: string;

  price: number;

  minutes: number;

  matchBookings: {
    id: number;
    confirmMatchResults: boolean;
    team: string;
    player: {
      id: number;
      ratingPadel: number;
      ratingPickleball: number;
      ratingTennis: number;
      updatedAt: string;
      createdAt: string;
    };
    updatedAt: string;
    createdAt: string;
  }[];

  slot: {
    id: number;
    time: 'string';
    updatedAt: string;
    createdAt: string;
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
}
[];

export interface CreateMatchDTO {
  selectedDate: Date;
  slots: number[];
  ratingFrom: number;
  reatingTo: number;
}

export interface JoinMatchDTO {
  matchId: number;
  team: string;
}

export interface UploadResultsDTO {
  matchId: number;
  matchResults: number[][];
}
