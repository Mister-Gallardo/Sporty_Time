export enum Sports {
  PADEL = 'Padel',
  TENNIS = 'Tennis',
  PICKEBALL = 'Pickleball',
}

export enum ERadioLabelType {
  WITH_ICON_AND_DESCRIPTION,
  TITLE_ONLY,
  WITH_DESCRIPTION,
}

// match creation
export interface INewMatchConfig {
  gender: string;
  ratingFrom: number;
  ratingTo: number;
  type: string;
}

export interface ISlotWithTimeAndDuration {
  selectedDate: Date;
  slotId: number;
  time: string;
  duration: number;
}
