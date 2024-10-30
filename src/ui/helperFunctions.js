export const getImmediateDiagonalCells = function (row, col) {
  const boardSize = 10;
  const diagonals = [];

  // Top-left diagonal
  if (row - 1 >= 0 && col - 1 >= 0) {
    diagonals.push([row - 1, col - 1]);
  }

  // Top-right diagonal
  if (row - 1 >= 0 && col + 1 < boardSize) {
    diagonals.push([row - 1, col + 1]);
  }

  // Bottom-left diagonal
  if (row + 1 < boardSize && col - 1 >= 0) {
    diagonals.push([row + 1, col - 1]);
  }

  // Bottom-right diagonal
  if (row + 1 < boardSize && col + 1 < boardSize) {
    diagonals.push([row + 1, col + 1]);
  }

  return diagonals;
};

export const getAllNeighboringCells = function (row, col) {
  const boardSize = 10;
  return [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
    ...getImmediateDiagonalCells(row, col),
  ].filter(([r, c]) => r >= 0 && c >= 0 && r < boardSize && c < boardSize);
};

export const getCors = function (cell) {
  let x = Number(cell.getAttribute("data-cors").split(",")[0]);
  let y = Number(cell.getAttribute("data-cors").split(",")[1]);
  return [x, y];
};
