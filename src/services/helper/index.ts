export const timeToDate = (time: string) => {
  return Date.parse(`01-01-1970 ${time}`);
};

export const gameDateToDate = (gameDate: string, time: string) => {
  return Date.parse(`${gameDate} ${time}`);
};
