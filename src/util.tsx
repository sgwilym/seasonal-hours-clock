//================================================================================
// HELPERS

// a function that does nothing
// this helps satisfy the linter that a variable is being used
export let nop = (x: any): void => {};

// given a date, return the fraction of the way it is through the day
// from midnight to midnight, range 0-1, in utc.
export let dayPct = (date: Date): number => {
  return (
    date.getUTCHours() / 24 +
    date.getUTCMinutes() / 24 / 60 +
    date.getUTCSeconds() / 24 / 60 / 60
  );
};

export let interp = (a: number, b: number, tt: number): number =>
  a + (b - a) * tt;

// array from 0 to n-1
export let range = (n: number): number[] =>
  Array(n)
    .fill(0)
    .map((x, ii) => ii);
