import { RequestQueryBuilder } from '@dataui/crud-request';
import { api } from '../api/service';
import { CreateClassDTO, IClass, IClassData } from './service';
import { IFeedbackData } from '../club/interface';
import { IReviewData } from '../matches/interface';

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
    { field: 'classBookings' },
    { field: 'classBookings.player' },
    { field: 'classBookings.player.user' },
    { field: 'classBookings.player.user.avatar' },
  ])
    .setFilter({ field: 'booking.cancelled', operator: '$ne', value: true })
    .query();

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
    { field: 'booking.court.tags' },
    { field: 'owner' },
    { field: 'owner.user' },
    { field: 'classBookings' },
    { field: 'classBookings.player' },
    { field: 'classBookings.player.user' },
    { field: 'classBookings.player.user.avatar' },
  ]).query();
  const res = await api.get<IClass>(`classes/${classId}?${qb.queryString}`);
  return res;
}

export async function getMyClasses() {
  const qb = RequestQueryBuilder.create();
  qb.setJoin([
    { field: 'booking' },
    { field: 'booking.court' },
    { field: 'booking.court.club' },
    { field: 'classBookings' },
    { field: 'classBookings.player' },
    { field: 'classBookings.player.user' },
    { field: 'classBookings.player.user.avatar' },
  ]).query();

  const { data } = await api.get<IClassData>(`/classes/my?${qb.queryString}`);
  return data;
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
  qb.setFilter({
    field: 'bookingPayment.orderId',
    operator: '$eq',
    value: orderId,
  }).query();
  const res = await api.get<any>(`classes?${qb.queryString}`);
  return res?.data;
}

export async function getClassReviews(id: number) {
  const qb = RequestQueryBuilder.create();
  qb.setJoin([{ field: 'player' }, { field: 'player.user' }]).query();

  const { data } = await api.get<IFeedbackData>(
    `/player/${id}/feedbacks?${qb.queryString}`,
  );
  return data;
}

export async function classReview(data: IReviewData) {
  const { id, comment, rating } = data;

  const res = await api.patch(`/classbookings/${id}`, { comment, rating });
  return res.data;
}
