import { ECourtType } from '../services/club/interface';
import { ESport, EMatchType } from '../services/matches/interface';

export const getMatchTypeName = (type: string | EMatchType) => {
  switch (type) {
    case EMatchType.FRIENDLY:
      return 'Дружеский';
    case EMatchType.COMPETITIVE:
      return 'Соревновательный';

    default:
      return '';
  }
};

export const getSportName = (sportKey: string | ESport) => {
  switch (sportKey) {
    case ESport.PADEL:
      return 'Падел';
    case ESport.TENNIS:
      return 'Теннис';
    case ESport.PICKLEBALL:
      return 'Пиклбол';

    default:
      return '';
  }
};

export const getCourtTypeName = (type: string | ECourtType) => {
  switch (type) {
    case ECourtType.INDOOR:
      return 'Внутри';
    case ECourtType.OUTDOOR:
      return 'Снаружи';

    default:
      return '';
  }
};
