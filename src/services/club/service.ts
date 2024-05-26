import axios from 'axios';
import { api } from '../api/service';
import {
  Club,
  IFeedbackData,
  LocationLatAndLong,
  LocationsData,
} from './interface';
import { GetAvailableMatchesAndClubsDTO } from '../matches/interface';
import { RequestQueryBuilder } from '@dataui/crud-request';

export async function getClubs(data: GetAvailableMatchesAndClubsDTO) {
  const { sport, gamedates, clubs, timefrom, timeto, lat, long } = data;

  const clubsData = clubs ? `&clubs=${clubs}` : '';

  const latAndLong = lat && long ? `&lat=${lat}&long=${long}` : '';

  const res = api.get<Club[]>(
    `/clubs?sport=${sport}&gamedates=${gamedates}${clubsData}&timefrom=${timefrom}&timeto=${timeto}${latAndLong}`,
  );
  return res;
}

export async function getClub(id: number, params: any) {
  const { data } = await api.get<Club>('/clubs/' + id, { params });
  return data;
}

export async function getClubById(id: number, params: any) {
  const { data } = await api.get<Club>(`/clubs/simple/${id}`, { params });
  return data;
}

export async function bookCourt(id: number, params: any) {
  const { data } = await api.post('/clubs/' + id, { params });
  return data;
}

export async function getClubsByLocation({
  lat,
  long,
  sport,
}: LocationLatAndLong) {
  const { data } = await api.get<Club[]>(
    `/clubs/all?lat=${lat}&long=${long}&sport=${sport}`,
  );
  return data;
}

// Get searching location data (for clubs search)
export async function getLocations(searchTerm: string) {
  const { data } = await axios.get<LocationsData>(
    `https://photon.komoot.io/api/?q=${searchTerm}&layer=city&limit=100&osm_tag=place:city`,
  );
  return data.features;
}

export async function getClubReviews(id: number) {
  const qb = RequestQueryBuilder.create();
  qb.setJoin([{ field: 'player' }, { field: 'player.user' }]).query();

  const { data } = await api.get<IFeedbackData>(
    `/clubs/${id}/feedbacks?${qb.queryString}`,
  );
  return data;
}
