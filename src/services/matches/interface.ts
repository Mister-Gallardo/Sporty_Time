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

export interface CreateMatchDTO {
  slotId: number;
  selectedDate: Date;
}
