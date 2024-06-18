export const getDatesList = (amount: number, timeZone?: string) => {
  const now = new Date();
  const dates = Array.from(Array(amount)).map(
    (_, i) =>
      new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + i),
      ),
  );

  return dates;
};
