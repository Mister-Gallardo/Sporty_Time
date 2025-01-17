import { Court, MatchTimeRange } from '../club/interface';
import { Player } from '../user/interface';

export type matchResults = Array<number[]> | null;

export interface Booking {
  id: number;
  startsAt: string;
  endsAt: string;
  interval: string;
  duration: number;
  series: string[];
  cancelled: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  court: Court | null;
}

export interface MatchMember {
  id: number;
  paid: number;
  confirmMatchResults: boolean;
  matchResults: matchResults | null;
  team: string;
  createdAt: string;
  updatedAt: string;
  player: Player;
}

export interface MatchMemberShort {
  team: string;
  paid: number;
  player: Player;
}

export interface IJoinApprovals {
  id: number;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
  approver: {
    id: 10207;
    paid: 1;
    matchResults: matchResults | null;
    confirmMatchResults: boolean;
    team: string;
    ratingAfterMatch: number;
    ratingProfit: number;
    createdAt: string;
    updatedAt: string;
    player: Player;
  };
}

export type IApproved = boolean | null;

export interface IJoinRequest {
  id: number;
  approved: IApproved;
  team: string;
  createdAt: string;
  updatedAt: string;
  joinapprovals: IJoinApprovals[];
  player: Player;
}

export interface MatchData {
  booking: Booking;
  paid: boolean;
  totalPaid: number;
  id: number;
  minutes: number;
  price: number;
  isPrivate: boolean;
  isApproved: boolean;
  isCancelled: boolean;
  sport: string;
  matchResults: matchResults;
  joinrequests: IJoinRequest[];
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
  gender: EGender;
}
[];

export interface CreateMatchDTO {
  courtId: number;
  gameDate: Date | string;
  type: EMatchType;
  playTime: number;
  ratingFrom: number;
  ratingTo: number;
  gender: EGender;
  isPrivate: boolean;
  onlyMyPart: boolean;
}

export interface JoinMatchDTO {
  matchId: number;
  team: string;
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

export interface IMatchBookingData extends MatchMember {
  matchResults: null;
  ratingAfterMatch: number;
  ratingProfit: number;
  match: MatchData;
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

export interface IAddPlayerToMatchData {
  playerId: number;
  team: string;
  matchId: number;
}

export interface IReviewData {
  id: number;
  comment: string;
  rating: number;
}
