import { Booking, ESport } from './../matches/interface';
import { EGender } from '../matches/interface';

export interface CreateClassDTO {
  courtId: number;
  gameDate: Date | string;
  playTime: number;
  ratingFrom: number;
  playersCount: number;
  price: number;
  ratingTo: number;
  gender: EGender;
  sport: ESport;
  isPrivate: boolean;
  title: string;
  description?: string;
}

export interface IClassData {
  count: number;
  data: IClass[];
  page: number;
  pageCount: number;
  total: number;
}

export interface IClass {
  id: number;
  title: string;
  booking: Booking;
  description?: string;
  price: number;
  ratingFrom: number;
  ratingTo: number;
  isPrivate: boolean;
  playersCount: number;
  courtId: number;
  gameDate: string;
  playTime: number;
  gender: EGender;
  sport: ESport;
}
