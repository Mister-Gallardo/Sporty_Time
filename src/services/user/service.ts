import { UserProfile, EditUserProfile } from './interface';
import { api } from '../api/service';

export function getUserInfo() {
  return api.get<UserProfile>('/users/me');
}
export function editUserProfile(data: FormData | EditUserProfile) {
  return api.post('/users/me', data);
}
