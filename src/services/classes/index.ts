import { api } from '../api/service';
import { CreateClassDTO, IClass, IClassData } from './service';

export async function getClassBookingYookassaToken(data: CreateClassDTO) {
  const res = await api.post('/classes/new', data);
  return res?.data;
}

export async function getClasses() {
  const { data } = await api.get<IClassData>('/classes');
  return data;
}

export async function getClass(classId: number | string) {
  const res = await api.get<IClass>(`classes/${classId}`);
  return res;
}

export async function getMyClasses() {
  const { data } = await api.get<IClassData>('/classes/my');
  return data;
}

export async function joinClass(classId: number) {
  const { data } = await api.post(`classes/${classId}/join`);
  return data;
}
