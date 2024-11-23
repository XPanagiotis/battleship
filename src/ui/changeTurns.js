export const updateUi = function () {
  const gameStatus = document.getElementById("game-status");
  const cells1 = document.querySelectorAll(".gameboard-1 .board-cell");
  const cells2 = document.querySelectorAll(".gameboard-2 .board-cell");

  if (gameStatus.textContent == "Player 1's Turn") {
    gameStatus.textContent = "Player 2's Turn";
    cells2.forEach((cell) => {
      cell.style.pointerEvents = "none";
    });

    cells1.forEach((cell) => {
      cell.style.pointerEvents = "all";
    });
  } else {
    gameStatus.textContent = "Player 1's Turn";
    cells2.forEach((cell) => {
      cell.style.pointerEvents = "all";
    });

    cells1.forEach((cell) => {
      cell.style.pointerEvents = "none";
    });
  }
};
