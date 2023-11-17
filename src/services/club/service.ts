import { api } from '../api/service';

export async function getClubs(params: any) {
  const { data } = await api.get<any[]>('/clubs', { params });
  return data;
}

export async function getClub(id: number, params: any) {
  const { data } = await api.get('/clubs/' + id, { params });
  return data;
}

export async function bookCourt(id: number, params: any) {
  const { data } = await api.get('/clubs/' + id, { params });
  return data;
}
