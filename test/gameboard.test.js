import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ships";

test("should be able to place a ship horizontaly", () => {
  const gameboard = Gameboard();
  const ship = Ship(4);
  gameboard.placeShip(2, 2, ship, "h");
  expect(gameboard.receiveAttack(2, 3)).toBe(true);
});

test("should be able to report if all the ships have been sunk", () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  const ship2 = Ship(2);
  gameboard.placeShip(2, 2, ship1, "h");
  gameboard.placeShip(0, 0, ship2, "v");
  gameboard.receiveAttack(2, 2);
  gameboard.receiveAttack(2, 2);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  expect(gameboard.allShipsSunk()).toBe(true);
});
