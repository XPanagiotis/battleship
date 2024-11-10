import { renderHit, renderMiss } from "./ui/renderAttack";
import { getImmediateDiagonalCells } from "./ui/helperFunctions";
import { getAllNeighboringCells } from "./ui/helperFunctions";
import { getCors } from "./ui/helperFunctions";
import { events } from "./pubSupPattern";

export const handleAttack = function ([
  player,
  gameboard,
  cell,
  gameboardSelector,
]) {
  const [x, y] = getCors(cell);
  const attackResult = player.attackEnemy(gameboard, x, y);

  if (attackResult.hit) {
    renderHit(cell);

    if (attackResult.sunk) {
      markSurroundingCellsAsMiss(
        attackResult.ship,
        gameboard,
        gameboardSelector
      );
    } else {
      getImmediateDiagonalCells(x, y).forEach(([dx, dy]) => {
        markMiss(dx, dy, gameboardSelector);
      });
    }
  } else {
    renderMiss(cell);
    events.emit("changeTurn");
  }

  if (gameboard.allShipsSunk()) {
    console.log("win"); // Show win message
  }
};

function markMiss(x, y, gameboardSelector) {
  const cell = document.querySelector(
    `${gameboardSelector} [data-cors="${x},${y}"]`
  );
  if (cell && !cell.classList.contains("hit")) {
    renderMiss(cell);
    removeEL(cell);
  }
}

function markSurroundingCellsAsMiss(ship, gameboard, gameboardSelector) {
  // Get first and last positions of the ship to mark only necessary surrounding cells
  const firstPos = ship.positions[0];
  const lastPos = ship.positions[ship.positions.length - 1];

  [firstPos, lastPos].forEach(([x, y]) => {
    getAllNeighboringCells(x, y).forEach(([nx, ny]) => {
      const neighborCell = document.querySelector(
        `${gameboardSelector} [data-cors="${nx},${ny}"]`
      );

      // Only mark as miss if the cell is empty (not a ship part) and not already hit
      if (neighborCell && !gameboard.receiveAttack(nx, ny).hit) {
        renderMiss(neighborCell);
        removeEL(neighborCell);
      }
    });
  });
}

function removeEL(originalElement) {
  const clonedElement = originalElement.cloneNode(true);
  originalElement.parentNode.replaceChild(clonedElement, originalElement);
}

events.on("submit-attack", handleAttack);
