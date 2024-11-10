export const Gameboard = function () {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  const ships = [];

  function placeShip(x, y, ship, direction) {
    if (direction == "h") {
      for (let i = 0; i < ship.length; i++) {
        board[x][y + i] = ship;
        ship.positions.push([x, y + i]);
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        board[x + i][y] = ship;
        ship.positions.push([x + i, y]);
      }
    }
    ships.push(ship);
  }

  function receiveAttack(x, y) {
    const target = board[x][y];
    if (target == null) {
      board[x][y] = "miss";
      return { hit: false, sunk: false };
    } else if (target !== "miss") {
      target.hit();
      return { hit: true, sunk: target.isSunk(), ship: target };
    }
    return { hit: false, sunk: false };
  }

  function allShipsSunk() {
    return ships.every((ship) => {
      return ship.isSunk();
    });
  }

  return { placeShip, receiveAttack, allShipsSunk };
};
