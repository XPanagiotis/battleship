import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ships";
import { getAllNeighboringCells } from "./ui/helperFunctions";

export const randomiseShips = function (gameboard, shipLengths) {
  const getRandomInt = (max) => Math.floor(Math.random() * max);

  // Validate if a ship can be placed
  function isValidPlacement(x, y, length, direction) {
    const shipCells = [];
    for (let i = 0; i < length; i++) {
      const checkX = direction === "h" ? x : x + i;
      const checkY = direction === "h" ? y + i : y;

      // Out of bounds
      if (checkX < 0 || checkX >= 10 || checkY < 0 || checkY >= 10) {
        return false;
      }

      // Cell is already occupied
      if (gameboard.board[checkX][checkY] !== null) {
        return false;
      }

      shipCells.push([checkX, checkY]);
    }

    // Ensure ships are not sticking to each other
    const allNeighboringCells = shipCells
      .flatMap(([cellX, cellY]) => getAllNeighboringCells(cellX, cellY))
      .map(([neighborX, neighborY]) => `${neighborX},${neighborY}`);

    for (const neighbor of allNeighboringCells) {
      const [neighborX, neighborY] = neighbor.split(",").map(Number);
      if (gameboard.board[neighborX]?.[neighborY] !== null) {
        return false;
      }
    }

    return true;
  }

  // Place a ship on the board
  function placeShipRandomly(length) {
    let placed = false;

    while (!placed) {
      const x = getRandomInt(10); // Random row
      const y = getRandomInt(10); // Random column
      const direction = Math.random() < 0.5 ? "h" : "v"; // Horizontal or Vertical

      if (isValidPlacement(x, y, length, direction)) {
        const ship = Ship(length); // Create a new ship
        gameboard.placeShip(x, y, ship, direction);
        placed = true;
      }
    }
  }

  // Place all ships
  shipLengths.forEach((length) => placeShipRandomly(length));
};
