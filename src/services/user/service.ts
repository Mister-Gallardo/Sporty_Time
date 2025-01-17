import { UserProfile, EditUserProfile, User } from './interface';
import { api } from '../api/service';
import { RequestQueryBuilder } from '@dataui/crud-request';

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
  qb.setJoin([
    { field: 'avatar' },
    { field: 'player' },
    { field: 'player.matchBookings' },
  ]).query();

  return api.get<User>(`/users/${id}?${qb.queryString}`);
}

export function getUsersList(searchTerm: string) {
  const qb = RequestQueryBuilder.create();

  qb.search({
    $or: [
      {
        fullname: {
          $contL: searchTerm,
        },
      },
      {
        email: {
          $contL: searchTerm,
        },
      },
      {
        phone: {
          $contL: searchTerm,
        },
      },
    ],
  })
    .setJoin([{ field: 'avatar' }, { field: 'player' }])
    .query();

  return api.get<User[]>(`/users?${qb.queryString}`);
}

export function getTrainerBalance() {
  return api.get<{ balance: number }>('/users/me/balance');
}
