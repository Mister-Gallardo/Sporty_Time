import { api } from '../api/service';
import { IAuthForm } from '../api/interface';

export async function registerRequest(data: IAuthForm) {
  const { email } = data;

  const res = api.post('/auth/register/request', {
    email: email,
  });

  return res;
}

export async function registerUser(data: IAuthForm) {
  const res = api.post('/auth/register', data);
  return res;
}

export async function loginUser(data: IAuthForm) {
  const res = api.post('/auth/login', data);
  return res;
}

export const isAuthorized = () => {
  try {
    const token = localStorage.getItem('jwtToken');
    const [, a2] = token?.split('.') || [];
    const { exp } = JSON.parse(atob(a2));
    if (exp * 1000 > Date.now()) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

export async function changePasswordRequest(email: string) {
  const res = api.post('/auth/change-password/request', { email });
  return res;
}

export async function changePassword(data: any) {
  const res = api.post('/auth/change-password', data);
  return res;
}

export async function loginWithOtp(email: string) {
  const res = api.post('/auth/otp', { email });
  return res;
}
