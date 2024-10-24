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

export const getCors = function (cell) {
  let x = Number(cell.getAttribute("data-cors").split(",")[0]);
  let y = Number(cell.getAttribute("data-cors").split(",")[1]);
  return [x, y];
};
