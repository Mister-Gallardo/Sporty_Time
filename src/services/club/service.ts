import axios from 'axios';
import { api } from '../api/service';
import { Club, LocationLatAndLong, LocationsData } from './interface';

// hardcoded time while filter is not finished
export async function getClubs(gamedates: string) {
  const { data } = await api.get<Club[]>(
    `/clubs?gamedates=${gamedates}&timefrom=10:00&timeto=18:00`,
  );
  return data;
}
export async function getClub(id: number, params: any) {
  const { data } = await api.get<Club>('/clubs/' + id, { params });
  return data;
}

export async function getClubById(id: number, params: any) {
  const { data } = await api.get<Club>('/clubs/simple/' + id, { params });
  return data;
}

export async function bookCourt(id: number, params: any) {
  const { data } = await api.post('/clubs/' + id, { params });
  return data;
}

export async function getClubsByLocation({ lat, long }: LocationLatAndLong) {
  const { data } = await api.get<Club[]>(`/clubs/all?lat=${lat}&long=${long}`);
  return data;
}

// Get searching location data (for clubs search)
export async function getLocations(searchTerm: string) {
  const { data } = await axios.get<LocationsData>(
    `https://photon.komoot.io/api/?q=${searchTerm}&layer=city&limit=100&osm_tag=place:city`,
  );
  return data.features;
}
