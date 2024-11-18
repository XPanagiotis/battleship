//import styles
import "./ui/styles/general.css";
import "./ui/styles/gameboard.css";

//import js modules
import { Player } from "../src/player";
import { Gameboard } from "../src/gameboard";
import { renderBoard } from "./ui/renderBoard";
import { Ship } from "../src/ships";
import { handleAttack } from "./handleAttack";
import { events } from "./pubSupPattern";
import { updateUi } from "./ui/changeTurns";

function newGame() {
  const player1 = Player();
  const player2 = Player();

  const gameboard1 = Gameboard();
  const gameboard2 = Gameboard();

  renderBoard();

  const ships = [
    { length: 5, x: 1, y: 1, direction: "h" },
    { length: 4, x: 1, y: 8, direction: "v" },
    { length: 3, x: 4, y: 2, direction: "h" },
    { length: 3, x: 6, y: 9, direction: "v" },
    { length: 2, x: 7, y: 6, direction: "v" },
    { length: 2, x: 8, y: 1, direction: "h" },
  ];

  ships.forEach(({ length, x, y, direction }) => {
    gameboard1.placeShip(x, y, Ship(length), direction);
    gameboard2.placeShip(x, y, Ship(length), direction);
  });

  let currentPlayer = player1;
  let currentGameboard = gameboard2;
  let currentGameboardSelector = ".gameboard-2";

  function changeTurn() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    currentGameboard = currentPlayer === player1 ? gameboard2 : gameboard1;
    currentGameboardSelector =
      currentPlayer === player1 ? ".gameboard-2" : ".gameboard-1";
    setEventListeners();
    updateUi();
  }

  function setEventListeners() {
    document.querySelectorAll(".board-cell").forEach((cell) => {
      cell.removeEventListener("click", handleCellClick);
    });

    const cells =
      currentPlayer === player1
        ? document.querySelectorAll(".gameboard-2 .board-cell")
        : document.querySelectorAll(".gameboard-1 .board-cell");

    cells.forEach((cell) => {
      cell.addEventListener("click", handleCellClick);
    });
  }

  function handleCellClick(event) {
    const cell = event.currentTarget;
    handleAttack([
      currentPlayer,
      currentGameboard,
      cell,
      currentGameboardSelector,
    ]);
    cell.removeEventListener("click", handleCellClick);
  }

  events.on("changeTurn", changeTurn);
  setEventListeners();
}

newGame();
