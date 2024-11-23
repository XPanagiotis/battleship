export const revealShips = function (gameboard, selector) {
  gameboard.ships.forEach((ship) => {
    ship.positions.forEach(([x, y]) => {
      const cell = document.querySelector(
        `${selector} .board-cell[data-cors="${x},${y}"]`
      );
      if (cell) {
        cell.style.backgroundColor = "red"; // Highlight ship cells
      }
    });
  });
};
