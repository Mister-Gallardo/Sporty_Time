import { api } from '../api/service';
import { INotification } from './interface';

export function registerDeviceToken(token: string) {
  const res = api.post('/notification/token/register', { token });
  return res;
}

export function removeDeviceToken(token: string) {
  const res = api.post('/notification/token/remove', { token });
  return res;
}

export function getNotifications() {
  const res = api.get<INotification[]>('/notification');
  return res;
}

export function markNotificationAsRead(id: number) {
  const res = api.post(`notification/${id}/markasread`);
  return res;
}
