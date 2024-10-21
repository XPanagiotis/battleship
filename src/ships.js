export const Ship = function (lenght) {
  let hits = 0;

  const hit = () => {
    hits++;
  };

  const isSunk = () => {
    return hits >= lenght;
  };

  return { lenght, hit, isSunk };
};
