//import styles
import "./ui/styles/general.css";
import "./ui/styles/gameboard.css";
import "./ui/styles/editScreen.css";

//import js modules
import { Player } from "../src/player";
import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ships";
import { renderBoard } from "./ui/renderBoard";
import { handleAttack } from "./handleAttack";
import { events } from "./pubSupPattern";
import { updateUi } from "./ui/changeTurns";
import { renderEditScreen } from "./ui/renderEditScreen";
import { setDragAndDrop } from "./ui/setDragAndDrop";
import { randomiseShips } from "./randomiseShips";
import { revealShips } from "./revealShips";

function newGame() {
  const player1 = Player();
  const player2 = Player();

  const gameboard1 = Gameboard();
  const gameboard2 = Gameboard();

  // By default place the ships randomly
  const shipLengths = [5, 4, 3, 3, 2, 2];
  randomiseShips(gameboard1, shipLengths);
  randomiseShips(gameboard2, shipLengths);

  renderBoard();

  /*const ships = [
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
  });*/

  let currentPlayer = player1;
  let currentGameboard = gameboard2;
  let currentGameboardSelector = ".gameboard-2";

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

  // Add event listeners at the buttons
  const randomiseBtn = document.getElementById("randomise-gameboard");
  const resetBtn = document.querySelectorAll("#reset-gameboard");
  const revealShipsBtn = document.querySelectorAll("#reveal-ships");

  // Reset gameboard
  resetBtn.forEach((btn) => {
    btn.addEventListener(
      "click",
      (e) => {
        renderEditScreen(e);
        setDragAndDrop();
      },
      { once: true }
    );
  });

  // Reveal ships
  revealShipsBtn.forEach((btn) => {
    if (btn.dataset.gameboard == "1") {
      const gameboardSelector = ".gameboard-1";
      btn.addEventListener("click", () => {
        revealShips(gameboard1, gameboardSelector);
      });
    } else {
      const gameboardSelector = ".gameboard-2";
      btn.addEventListener("click", () => {
        revealShips(gameboard2, gameboardSelector);
      });
    }
  });

  // Handle board attacks
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

  function changeTurn() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    currentGameboard = currentPlayer === player1 ? gameboard2 : gameboard1;
    currentGameboardSelector =
      currentPlayer === player1 ? ".gameboard-2" : ".gameboard-1";
    setEventListeners();
    updateUi();
  }

  events.on("changeTurn", changeTurn);
  setEventListeners();
}

newGame();
