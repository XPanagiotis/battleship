import { createBoard } from "./domHelperFunctions/createBoard";

export const renderBoard = function () {
  const yourBoard = document.querySelector(".gameboard-1");
  const enemyBoard = document.querySelector(".gameboard-2");

  // Render boards for Player 1 and Player 2
  yourBoard.appendChild(createBoard());
  enemyBoard.appendChild(createBoard());
};
