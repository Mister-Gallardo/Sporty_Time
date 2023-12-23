import { isToday, isTomorrow } from 'date-fns';

export enum EType {
  DAY,
  WEEK_AND_DAY,
  MONTH_AND_DAY,
  WEEK_DAY_MONTH,
}

// adds minutes to passed time
export const addTime = (time: string, mins: number) => {
  const [hours, minutes] = time.split(':').map(Number);
  const currentDate = new Date();

  currentDate.setHours(hours);
  currentDate.setMinutes(minutes);

  currentDate.setMinutes(currentDate.getMinutes() + mins);

  return currentDate.toLocaleTimeString().slice(0, -3);
};

// return date as 'today'/ 'tomorrow' / day of the week / month day
export const getDayFormat = (
  date: Date | string,
  type: EType,
  startTime?: string,
  addMinutes?: number,
) => {
  const matchDate = new Date(date);

  let formatDate = '';
  let dateOptions: any;

  if (isToday(matchDate)) {
    formatDate = 'Сегодня';
  } else if (isTomorrow(matchDate)) {
    formatDate = 'Завтра';
  } else {
    if (type === EType.MONTH_AND_DAY) {
      dateOptions = { month: 'short', day: 'numeric' };
    } else if (type === EType.WEEK_DAY_MONTH) {
      dateOptions = { weekday: 'long', day: 'numeric', month: 'short' };
    }
    formatDate = matchDate.toLocaleDateString('ru-RU', dateOptions);
  }

  if (startTime)
    formatDate += ` | ${
      startTime.length < 6 ? startTime : startTime.slice(0, -3)
    }`;
  if (startTime && addMinutes)
    formatDate += ` - ${addTime(startTime, addMinutes)}`;

  return formatDate;
};