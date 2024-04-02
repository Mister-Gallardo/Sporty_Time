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

export function getUsersList(searchTerm: string) {
  return api.get<User[]>(
    '/admin/users?s={"$or": [{"firstname": {"$contL": "amir"}}, {"lastname": {"$contL": "musaev2"}}]',
  );
}
