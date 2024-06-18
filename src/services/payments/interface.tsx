import { IClass, IClassBooking } from '../classes/service';
import { IMatchBookingData } from '../matches/interface';

export interface IPayments {
  id: number;
  money: number;
  orderId: string;
  refunded: boolean;
  settled: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  matchBooking: IMatchBookingData | null;
  classBooking: IClassBooking | null;
  class: IClass | null;
}
