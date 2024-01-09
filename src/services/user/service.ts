import { UserProfile } from './interface';
import { api } from '../api/service';

export function getUserInfo() {
  return api.get<UserProfile>('/users/me');
}
export function editUserProfile(data: FormData) {
  return api.post('/users/me', data);
}
