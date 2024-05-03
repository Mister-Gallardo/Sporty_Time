import { api } from '../api/service';
import { MatchData } from '../matches/interface';

export function getUnpaidMatchesList() {
  const res = api.get<MatchData[]>('/matches/unpaid');
  return res;
}
