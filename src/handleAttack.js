import { renderHit, renderMiss } from "./ui/renderAttack";
import { getImmediateDiagonalCells } from "./ui/helperFunctions";
import { getAllNeighboringCells } from "./ui/helperFunctions";
import { getCors } from "./ui/helperFunctions";

export function handleAttack(player, enemyGameboard, cell) {
  const [x, y] = getCors(cell);
  const attackResult = player.attackEnemy(enemyGameboard, x, y);

  if (attackResult.hit) {
    renderHit(cell);

    if (attackResult.sunk) {
      const shipPositions = attackResult.ship.positions;
      [shipPositions[0], shipPositions[shipPositions.length - 1]].forEach(
        ([cellX, cellY]) => {
          getAllNeighboringCells(cellX, cellY).forEach(([nx, ny]) => {
            if (!enemyGameboard.receiveAttack(nx, ny).hit) {
              const neighborCell = document.querySelector(
                `.enemy-gameboard [data-cors="${nx},${ny}"]`
              );
              if (neighborCell) {
                renderMiss(neighborCell);
                neighborCell.removeEventListener("click", () =>
                  handleAttack(player, enemyGameboard, neighborCell)
                );
              }
            }
          });
        }
      );
    } else {
      getImmediateDiagonalCells(x, y).forEach(([dx, dy]) => {
        if (!enemyGameboard.receiveAttack(dx, dy).hit) {
          const diagonalCell = document.querySelector(
            `.enemy-gameboard [data-cors="${dx},${dy}"]`
          );
          if (diagonalCell) {
            renderMiss(diagonalCell);
            diagonalCell.removeEventListener("click", () =>
              handleAttack(player, enemyGameboard, diagonalCell)
            );
          }
        }
      });
    }
  } else {
    renderMiss(cell);
  }

  cell.removeEventListener("click", () =>
    handleAttack(player, enemyGameboard, cell)
  );
}
