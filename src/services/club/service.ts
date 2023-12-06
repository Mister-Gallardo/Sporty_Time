import { api } from '../api/service';
import { Club } from './interface';

export async function getClubs(params: any) {
  const { data } = await api.get<Club[]>('/clubs', { params });
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
