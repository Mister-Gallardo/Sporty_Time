import { Sport } from '../../types';
import { User } from '../user/interface';

export enum MatchTimeRange {
  ALL = '6:00:00-23:59:00',
  MORNING = '6:00:00-12:00:00',
  AFTERNOON = '12:00:00-18:00:00',
  EVENING = '18:00:00-23:59:00',
  SPECIFIC = 'SPECIFIC',
}

export interface IAvailableTime {
  playTime: number;
  time?: string;
  price?: number;
  gameDate?: string;
}

export interface Club {
  id: number;
  title: string;
  city: string;
  img: string;
  user: User;
  courts: Court[];
  createdAt: Date;
  updatedAt: Date;
  availableSlots?: Record<
    string,
    {
      available: Court[];
      booked: Court[];
    }
  >;
  availableTimes?: Record<string, IAvailableTime[]>;
  minPrice: number;
  timezone: string;
  range?: number;
}

export interface Court {
  id: number;
  title: string;
  address: string;
  sport: Sport;
  location: string;
  price: number;
  club: Club;
  options: IAvailableTime[];
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

export interface SingleLocationData {
  geometry: {
    coordinates: [number, number];
    type: string;
  };
  type: string;
  properties: {
    osm_type: string;
    osm_id: number;
    extent: number[];
    country: string;
    osm_key: string;
    countrycode: string;
    osm_value: string;
    name: string;
    county: string;
    type: string;
  };
}

export interface LocationsData {
  features: SingleLocationData[];
  type: string;
}

export interface LocationLatAndLong {
  lat: number;
  long: number;
  sport: Sport;
}
