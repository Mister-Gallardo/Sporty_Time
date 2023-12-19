// components => molecules:
export enum ERadioLabelType {
  WITH_ICON_AND_DESCRIPTION,
  TITLE_ONLY,
  WITH_DESCRIPTION,
}

// components => modal:
export interface IConfigMatchModalData {
  isPrivate: boolean;
  matchType: string;
  ratingFrom: number;
  ratingTo: number;
  gender: PreferedGender | string;
}

export enum PreferedGender {
  ALL = 'all',
  WOMEN = 'women',
  MEN = 'men',
  MIXED = 'mixed',
}

// need to change(?) !!!
export enum Sports {
  PADEL = 'Padel',
  TENNIS = 'Tennis',
  PICKEBALL = 'Pickleball',
}

// when join to team
export interface ITeamSlot {
  teamIndex: number;
  slotIndex: number;
}

// possible match statuses (planning)
export enum Status {
  CANCELED,
  COMPLETE,
  UPCOMING, // current date < match date
  IN_PROGRESS, // current date between playtime range
  VALIDATING, // confirmMatchResults: flase && matchResults: [smth]
  WITHOUT_RESULT, // confirmMatchResults: true && matchResults: null
  VALID_RESULT, // confirmMatchResults: true  && matchResults: [smth] && winningTeam: 'team'
  INVALID_RESULT, //(?)
  INCOMPLETE, // === tied in playtomic
  WAITING_FOR_RESULTS, // confirmMatchResults: false && matchResults: null
}
