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
  return res?.data;
}

export async function joinClass(classId: string) {
  const res = await api.post(`classes/${classId}/join`);
  return res?.data;
}

export async function cancelClass(classId: string) {
  const res = await api.delete(`classes/${classId}/cancel`);
  return res?.data;
}
export async function kickPlayerFromClass(data: {
  classId: string;
  playerId: number;
}) {
  const { classId, playerId } = data;
  const res = await api.delete(`classes/${classId}/kick/${playerId}`);
  return res?.data;
}

export async function getClassByOrderId(orderId: string) {
  const qb = RequestQueryBuilder.create();
  qb.setJoin([{ field: 'classBookings' }, { field: 'classBookings.payments' }])
    .setFilter({
      field: 'classBookings.payments.orderId',
      operator: '$eq',
      value: orderId,
    })
    .query();
  const res = await api.get<any>(`classes?${qb.queryString}`);
  return res?.data;
}
