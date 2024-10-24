//import styles
import "./ui/styles/general.css";
import "./ui/styles/gameboard.css";
//import js modules
import { Player } from "../src/player";
import { Gameboard } from "../src/gameboard";
import { renderBoard } from "./ui/renderBoard";
import { Ship } from "../src/ships";
import { renderHit } from "./ui/renderAttack";
import { renderMiss } from "./ui/renderAttack";
import { events } from "./pubSupPattern";
import { getImmediateDiagonalCells } from "./ui/helperFunctions";
import { getCors } from "./ui/helperFunctions";

function newGame() {
  const player1 = Player();
  const player2 = Player();

  const gamenboard1 = Gameboard();
  const gamenboard2 = Gameboard();

  events.emit("attack your board", gamenboard1);
  events.emit("attack enemy board", gamenboard2);

  renderBoard();

  //create ships manualy
  const ship5 = Ship(5);
  const ship4 = Ship(4);
  const ship3 = Ship(3);
  const ship3b = Ship(3);
  const ship2 = Ship(2);
  const ship2b = Ship(2);
  //manualy populate each player gameboard
  gamenboard1.placeShip(1, 1, ship5, "h");
  gamenboard1.placeShip(4, 2, ship3, "h");
  gamenboard1.placeShip(8, 1, ship2, "h");
  gamenboard1.placeShip(1, 8, ship4, "v");
  gamenboard1.placeShip(6, 9, ship3b, "v");
  gamenboard1.placeShip(7, 6, ship2b, "v");
  gamenboard2.placeShip(1, 1, ship5, "h");
  gamenboard2.placeShip(4, 2, ship3, "h");
  gamenboard2.placeShip(8, 1, ship2, "h");
  gamenboard2.placeShip(1, 8, ship4, "v");
  gamenboard2.placeShip(6, 9, ship3b, "v");
  gamenboard2.placeShip(7, 6, ship2b, "v");

  const board = document.querySelectorAll(".enemy-gameboard .board-cell");

  board.forEach((cell) => {
    cell.addEventListener("click", handleAttack);
  });

  function handleAttack() {
    const attackedCell = getCors(this);
    const x = attackedCell[0];
    const y = attackedCell[1];

    if (player1.attackEnemy(gamenboard2, x, y)) {
      renderHit(this);

      //get the diagonal cells of the hitted cell
      const missedCells = getImmediateDiagonalCells(x, y);

      //render the diagonal cells
      missedCells.forEach((cellCors) => {
        //give the "miss" value to each cell
        player1.attackEnemy(gamenboard2, cellCors[0], cellCors[1]);

        //select the cell from the DOM
        const cors = String(cellCors);
        const cell = document.querySelectorAll(
          `.enemy-gameboard [data-cors="${cors}"]`
        )[0];

        //render the cell
        renderMiss(cell);

        //remove Event Listener
        cell.removeEventListener("click", handleAttack);
      });
    } else {
      renderMiss(this);
    }
    this.removeEventListener("click", handleAttack);
  }
}

newGame();
