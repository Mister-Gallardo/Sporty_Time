import { Court } from '../club/interface';
import { Player } from '../user/interface';

export enum EMatchType {
  FRIENDLY = 'FRIENDLY',
  COMPETITIVE = 'COMPETITIVE',
}

export type matchResults = Array<number[]> | null;

export interface IMatchSlot {
  id: number;
  time: string;
  updatedAt: string;
  createdAt: string;
  court: Court;
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
  paid: boolean;
  id: number;
  gameDate: string;
  minutes: number;
  price: number;
  isPrivate: boolean;
  isCancelled: boolean;
  sport: string;
  matchResults: matchResults;
  confirmMatchResults: boolean;
  winningTeam: string | null;
  matchBookings: MatchMember[];
  slot: IMatchSlot;
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
  slotId: number;
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
  playerId: number;
}

export interface GetAvailableMatchesAndClubsDTO {
  sport: string;
  gamedates: string;
  range: number;
  lat: number;
  long: number;
  // time: string;
  // times: { value: string }[];
}
