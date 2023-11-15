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
  const { firstName, lastName, email, otp, password } = data;

  const res = api.post('/auth/register', {
    firstname: firstName,
    lastname: lastName,
    email: email,
    otp: otp,
    password: password,
  });

  return res;
}

export async function loginUser(data: IAuthForm) {
  const { email, password } = data;

  const res = api.post('/auth/login', {
    identifier: email,
    password: password,
  });

  return res;
}
