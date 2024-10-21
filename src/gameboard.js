import { Ship } from "./ships";

export const Gameboard = function () {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  const ships = [];

  function placeShip(x, y, ship, direction) {
    if (direction == "h") {
      for (let i = 0; i < ship.length; i++) {
        board[x][y + i] = ship;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        board[x + i][y] = ship;
      }
    }
    ships.push(ship);
  }

  function receiveAttack(x, y) {
    const target = board[x][y];
    if (target) {
      target.hit();
      return true;
    } else {
      board[x][y] = "miss";
      return false;
    }
  }

  function allShipsSunk() {
    return ships.every((ship) => ship.isSunk);
  }

  return { placeShip, receiveAttack, allShipsSunk };
};
