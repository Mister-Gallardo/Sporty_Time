import { ESport } from '../matches/interface';

export enum ECourtType {
  OUTDOOR = 'OUTDOOR',
  INDOOR = 'INDOOR',
}

export enum MatchTimes {
  ALL = 'ALL',
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON',
  EVENING = 'EVENING',
  // SPECIFIC = 'SPECIFIC',
}
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
  price: number;
  gameDate?: string;
}

export interface Images {
  id: number;
  formats: {
    png: string;
    large: string;
    small: string;
    medium: string;
  };
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Club {
  id: number;
  title: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  timezone: string;
  timezoneOffset: string;
  city: string | null;
  country: string | null;
  district: string | null;
  street: string | null;
  postalCode: string | null;
  description: string | null;
  website: string | null;
  phoneNumber: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  images: Images[];
  sports: string[];
  courts: Court[];
  tags: Tag[];
  availableSlots?: {
    [key: string]: {
      available: [] | Court[];
      booked: [] | Court[];
    };
  };
}

export interface Court {
  id: number;
  title: string;
  address: string;
  sport: ESport;
  location: string;
  price: number;
  club: Club | null;
  options: IAvailableTime[];
  tags: Tag[];
  type: string;
  createdAt: Date;
  updatedAt: Date;
  schedule: Schedule[];
}
export interface Schedule {
  id: number;
  startsAt: string;
  endsAt: string;
  interval: string;
  price: number;
  series: string[];
  weekDay: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
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
  sport: ESport;
}
