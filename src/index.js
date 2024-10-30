//import styles
import "./ui/styles/general.css";
import "./ui/styles/gameboard.css";
//import js modules
import { Player } from "../src/player";
import { Gameboard } from "../src/gameboard";
import { renderBoard } from "./ui/renderBoard";
import { Ship } from "../src/ships";
import { events } from "./pubSupPattern";
import { handleAttack } from "./handleAttack";

function newGame() {
  const player1 = Player();
  const player2 = Player();

  const gamenboard1 = Gameboard();
  const gamenboard2 = Gameboard();

  events.emit("attack your board", gamenboard1);
  events.emit("attack enemy board", gamenboard2);

  renderBoard();

  // Define ship lengths and positions
  const ships = [
    { length: 5, x: 1, y: 1, direction: "h" },
    { length: 4, x: 1, y: 8, direction: "v" },
    { length: 3, x: 4, y: 2, direction: "h" },
    { length: 3, x: 6, y: 9, direction: "v" },
    { length: 2, x: 7, y: 6, direction: "v" },
    { length: 2, x: 8, y: 1, direction: "h" },
  ];

  // Place ships for both players
  ships.forEach(({ length, x, y, direction }) => {
    const ship1 = Ship(length);
    const ship2 = Ship(length);
    gamenboard1.placeShip(x, y, ship1, direction);
    gamenboard2.placeShip(x, y, ship2, direction);
  });

  // Add click events to enemy board cells
  const board = document.querySelectorAll(".enemy-gameboard .board-cell");

  board.forEach((cell) => {
    cell.addEventListener("click", () => {
      handleAttack(player1, gamenboard2, cell);
    });
  });
}

newGame();
