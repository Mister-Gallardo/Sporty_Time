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

export enum Sport {
  PADEL = 'PADEL',
  TENNIS = 'TENNIS',
  PICKLEBALL = 'PICKLEBALL',
}

// when join to team
export interface ITeamSlot {
  teamIndex: number;
  slotIndex: number;
}

// possible match statuses (planning)
export enum Status {
  CANCELED,
  PENDING,
  COMPLETE,
  UPCOMING,
  IN_PROGRESS,
  VALIDATING,
  WITHOUT_RESULT,
  VALID_RESULT,
  INVALID_RESULT,
  INCOMPLETE,
  WAITING_FOR_RESULTS,
}

// court tag
export interface ITag {
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
}
