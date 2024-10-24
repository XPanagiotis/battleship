export const Player = function () {
  function attackEnemy(board, x, y) {
    return board.receiveAttack(x, y);
  }

  return { attackEnemy };
};
