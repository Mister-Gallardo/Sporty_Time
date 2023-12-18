export const countMatchEndTime = (startTime: string, playTime: number) => {
  const [hours, minutes] = startTime.split(':').map(Number);

  const currentDate = new Date();
  currentDate.setHours(hours);
  currentDate.setMinutes(minutes);

  currentDate.setMinutes(currentDate.getMinutes() + playTime);

  return currentDate.toLocaleTimeString().slice(0, -3);
};
