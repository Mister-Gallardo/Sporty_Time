import { MatchData, Status } from '../services/matches/interface';
import { getMatchStatus } from './getMatchStatus';
import { isToday } from 'date-fns';

enum PromptIconColor {
  PRIMARY = '#6d8ff9',
  WARNING = '#fcbb2d',
  DANGER = '#ff3a59',
}
enum PromptBGColor {
  PRIMARY = '#f6f6ff',
  WARNING = '#fef9ec',
  DANGER = '#fff3f5',
}

export const getPromptParams = (
  matchData: MatchData,
  playerAlreadyInSomeTeam: boolean,
) => {
  const status = getMatchStatus(matchData);
  const matchDate = new Date(matchData.booking.startsAt);

  if (status === Status.CANCELED) {
    return {
      color: PromptIconColor.DANGER,
      bgColor: PromptBGColor.DANGER,
      title: 'Бронирование было отменено',
      description: '',
    };
  }

  if (status === Status.IN_PROGRESS) {
    return {
      color: PromptIconColor.PRIMARY,
      bgColor: PromptBGColor.PRIMARY,
      title: 'Идёт игра',
      description: '',
    };
  }

  if (status === Status.VALIDATING) {
    return {
      color: PromptIconColor.WARNING,
      bgColor: PromptBGColor.WARNING,
      title: 'Результаты в процессе валидации',
      description:
        'Одна команда добавляет результат, а другая команда должна его подтвердить или изменить, иначе он будет одобрен автоматически через 24 часа.',
    };
  }
  if (playerAlreadyInSomeTeam) {
    return {
      color: PromptIconColor.PRIMARY,
      bgColor: PromptBGColor.PRIMARY,
      title: 'Вы зачислены на этот матч',
      description: '',
    };
  }

  if (status === Status.WAITING_FOR_RESULTS) {
    return {
      color: PromptIconColor.DANGER,
      bgColor: PromptBGColor.DANGER,
      title: 'Ожидается загрузка результатов',
      description: '',
    };
  }
  if (status === Status.COMPLETE || status === Status.INVALID_RESULT) {
    return null;
  }

  if (isToday(matchDate)) {
    return {
      color: PromptIconColor.WARNING,
      bgColor: PromptBGColor.WARNING,
      title: 'Регистрация на этот матч заканчивается сегодня',
      description: '',
    };
  }
  return null;
};
