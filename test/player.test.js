import { Player } from "../src/player";
import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ships";

test("player can attack enemy gameboard", () => {
  const player = Player();
  const enemyBoard = Gameboard();
  const ship = Ship(2);
  enemyBoard.placeShip(0, 0, ship, "h");
  expect(player.attackEnemy(enemyBoard, 0, 0)).toBe(true);
  expect(player.attackEnemy(enemyBoard, 1, 1)).toBe(false);
});
