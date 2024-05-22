import { api } from '../api/service';
import { MatchData } from '../matches/interface';
import { IPayments } from './interface';

export function getUnpaidMatchesList() {
  const res = api.get<MatchData[]>('/matches/unpaid');
  return res;
}

export function getMyPaymentsList() {
  const res = api.get<IPayments[]>('/payments/my');
  return res;
}
