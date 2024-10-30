export const Ship = function (length) {
  let hits = 0;
  const positions = [];

  const hit = () => {
    hits++;
  };

  const isSunk = () => {
    return hits >= length;
  };

  return { length, hit, isSunk, positions };
};
