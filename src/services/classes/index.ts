import { RequestQueryBuilder } from '@dataui/crud-request';
import { api } from '../api/service';
import { CreateClassDTO, IClass, IClassData } from './service';

export async function getClassBookingYookassaToken(data: CreateClassDTO) {
  const res = await api.post('/classes/new', data);
  return res?.data;
}

export async function getClasses() {
  const qb = RequestQueryBuilder.create();
  qb.setJoin([
    { field: 'booking' },
    { field: 'booking.court' },
    { field: 'booking.court.club' },
  ]).query();

  const { data } = await api.get<IClassData>(`/classes?${qb.queryString}`);
  return data;
}

export async function getClass(classId: number | string) {
  const qb = RequestQueryBuilder.create();
  qb.setJoin([
    { field: 'booking' },
    { field: 'booking.court' },
    { field: 'booking.court.club' },
    { field: 'booking.court.club.images' },
    { field: 'owner' },
    { field: 'classBookings' },
    { field: 'classBookings.player' },
  ]).query();
  const res = await api.get<IClass>(`classes/${classId}?${qb.queryString}`);
  return res;
}

export async function getMyClasses() {
  const res = await api.get<IClassData>('/classes/my');
  return res;
}

export async function joinClass(classId: string) {
  const res = await api.post(`classes/${classId}/join`);
  return res?.data;
}
