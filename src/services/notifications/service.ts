import { api } from '../api/service';

export function registerDeviceToken(token: string) {
  const res = api.post('/notification/token/register', { token });
  return res;
}

export function removeDeviceToken(token: string) {
  const res = api.post('/notification/token/remove', { token });
  return res;
}
