import { Court, Slot } from '../club/interface';
import { MatchMember } from '../user/interface';

export interface Match {
  id: number;
  slot: Slot;
  gameDate: Date;
  matchBookings: MatchMember[];
  createdAt: Date;
  updatedAt: Date;
}

export type matchResults = Array<number[]> | null;

export interface MatchData {
  id: number;
  title: string; 
  isCancelled: boolean;
  confirmMatchResults: boolean;
  gameDate: string;
  price: number;
  minutes: number;
  matchBookings: MatchMember[];
  slot: {
    id: number;
    time: string;
    updatedAt: string;
    createdAt: string;
    court: Court;
  };
  matchResults: matchResults;
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
  isPrivate: boolean;
}
[];

export interface CreateMatchDTO {
  slotId: number;
  gameDate: Date;
  type: string;
  playTime: number;
  ratingFrom: number;
  ratingTo: number;
  gender: string;
  isPrivate: boolean;
}

export interface JoinMatchDTO {
  matchId: number;
  team: string;
}

export interface UploadResultsDTO {
  matchId: number;
  matchResults: number[][];
}
