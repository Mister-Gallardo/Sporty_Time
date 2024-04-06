import { RequestQueryBuilder } from '@dataui/crud-request';
import { UserProfile, EditUserProfile, User } from './interface';
import { api } from '../api/service';

export function getUserInfo() {
  return api.get<UserProfile>('/users/me');
}

export function editUserProfile(data: FormData | EditUserProfile) {
  return api.post('/users/me', data);
}

export const deleteMe = async () => {
  return await api.delete('/users/me');
};

export function getSpecificUser(id: number) {
  const qb = RequestQueryBuilder.create();
  qb.setJoin([{ field: 'avatar' }, { field: 'player' }]).query();

  return api.get<User>(`/users/${id}?${qb.queryString}`);
}
