import { User } from './interface';
import { api } from '../api/service';

export function getUserInfo() {
  return api.get<User>('/users/me');
}
