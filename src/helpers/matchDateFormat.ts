import { isToday, isTomorrow } from 'date-fns';

// adapt and specify for all available date formats !!! MatchCard, MyMatchCard etc.

const dateOptions: any = { weekday: 'short', day: 'numeric' };

export const matchDateFormat = (date: string, matchTime: string) => {
  const currentDate = new Date(date);
  let day = '';

  if (isToday(currentDate)) {
    day = 'Today';
  } else if (isTomorrow(currentDate)) {
    day = 'Tomorrow';
  } else {
    day = currentDate.toLocaleDateString('ru-RU', dateOptions);
  }
  return day + ' | ' + matchTime.slice(0, -3);
};
