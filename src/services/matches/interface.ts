import { Court, MatchTimeRange } from '../club/interface';
import { Player } from '../user/interface';

export type matchResults = Array<number[]> | null;

export interface Booking {
  startsAt: string;
  endsAt: string;
  court: Court | null;
  duration: number;
  interval: string;
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
  type: EMatchType;
  playTime: number;
  ratingFrom: number;
  ratingTo: number;
  gender: EGender;
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

//match enums
export enum EGender {
  ALL = 'ALL',
  WOMEN = 'FEMALE',
  MEN = 'MALE',
  MIXED = 'MIXED',
}

export enum EMatchType {
  FRIENDLY = 'FRIENDLY',
  COMPETITIVE = 'COMPETITIVE',
}

export enum ESport {
  PADEL = 'PADEL',
  TENNIS = 'TENNIS',
  PICKLEBALL = 'PICKLEBALL',
}

// possible match statuses
export enum Status {
  CANCELED,
  PENDING,
  COMPLETE,
  UPCOMING,
  IN_PROGRESS,
  VALIDATING,
  WITHOUT_RESULT,
  INVALID_RESULT,
  INCOMPLETE,
  WAITING_FOR_RESULTS,
}
