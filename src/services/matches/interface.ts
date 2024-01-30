import { Court, MatchTimeRange } from '../club/interface';
import { Player } from '../user/interface';

export enum EMatchType {
  FRIENDLY = 'FRIENDLY',
  COMPETITIVE = 'COMPETITIVE',
}

export type matchResults = Array<number[]> | null;

export interface Booking {
  startsAt: Date;
  endsAt: Date;
  court: Court;
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchMember {
  id: number;
  paid: number;
  confirmMatchResults: boolean;
  team: string;
  createdAt: Date;
  updatedAt: Date;
  player: Player;
}

export interface MatchMemberShort {
  team: string;
  paid: number;
  player: Player;
}

export interface MatchData {
  booking: Booking;
  paid: boolean;
  id: number;
  minutes: number;
  price: number;
  isPrivate: boolean;
  isCancelled: boolean;
  sport: string;
  matchResults: matchResults;
  confirmMatchResults: boolean;
  winningTeam: string | null;
  matchBookings: MatchMember[];
  owner: Player;
  ratingFrom: number;
  ratingTo: number;
  createdAt: string;
  updatedAt: string;
  type: string;
  timeExpires: string;
}
[];

export interface CreateMatchDTO {
  courtId: number;
  money: number;
  gameDate: Date | string;
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
  money: number;
}

export interface UploadResultsDTO {
  matchId: number;
  matchResults: number[][];
}

export interface RemovePlayerFromMatch {
  matchId: number;
  deletePlayerId: number;
}

export interface GetAvailableMatchesAndClubsDTO {
  sport: string;
  gamedates: string;
  time?: MatchTimeRange | string;
  timefrom?: string;
  timeto?: string;
  clubs?: string;
  lat?: number;
  long?: number;
}
