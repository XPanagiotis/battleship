export const updateUi = function () {
  const gameStatus = document.getElementById("game-status");
  if (gameStatus.textContent == "Player 1") {
    gameStatus.textContent = "Player 2";
  } else {
    gameStatus.textContent = "Player 1";
  }
};
