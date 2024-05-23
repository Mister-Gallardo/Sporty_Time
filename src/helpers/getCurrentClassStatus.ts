import { differenceInHours } from 'date-fns';
import { IClass } from './../services/classes/service';

export const getCurrentClassStatus = (classData: IClass) => {
  if (!classData) return null;

  const { playersCount, booking, classBookings } = classData;

  const bookedPlacesAmount = classBookings?.length || 0;
  const isFillfilled = bookedPlacesAmount === playersCount;
  if (isFillfilled) return 'Мест нет';

  if (booking?.cancelled) return 'Отменено';

  const classStartsAt = new Date(booking?.startsAt);
  const timeDifference =
    classStartsAt && differenceInHours(classStartsAt, Date.now());

  const isRegistrationEnded = timeDifference <= 12;

  if (isRegistrationEnded) return 'Регистрация закончена';

  return null;
};
