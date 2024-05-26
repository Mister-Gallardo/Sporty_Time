import { differenceInHours } from 'date-fns';
import { IClass } from '../services/classes/service';
import { Player } from '../services/user/interface';

export const getClassStatus = (classData?: IClass, myPlayer?: Player) => {
  if (!classData) return null;

  const { playersCount, booking, classBookings, owner } = classData;

  if (booking?.cancelled) return 'Отменено';

  const isMyPlayerInClass = classBookings?.find(
    (booking) => booking?.player?.id === myPlayer?.id,
  );
  if (isMyPlayerInClass) return 'Вы присоединились';

  const isTrainer = owner?.id === myPlayer?.id;
  if (isTrainer) return 'Вы тренер';

  const bookedPlacesAmount = classBookings?.length || 0;
  const isFillfilled = bookedPlacesAmount === playersCount;
  if (isFillfilled) return 'Мест нет';

  const classStartsAt = new Date(booking?.startsAt);
  const timeDifference =
    classStartsAt && differenceInHours(classStartsAt, Date.now());

  const isRegistrationEnded = timeDifference <= 12;

  if (isRegistrationEnded) return 'Регистрация закончена';

  return null;
};
