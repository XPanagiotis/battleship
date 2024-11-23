export const setDragAndDrop = function () {
  const ships = document.querySelectorAll(".ship");
  const boardCells = document.querySelectorAll(".board-cell");

  let draggedShip = null;
  let shipLength = 0;

  // Drag Start
  ships.forEach((ship) => {
    ship.addEventListener("dragstart", (e) => {
      draggedShip = ship;
      shipLength = parseInt(ship.dataset.lenght, 10); // Store ship length
      e.dataTransfer.setData("text/plain", shipLength); // Pass ship length to drop
      ship.classList.add("dragging");
    });

    ship.addEventListener("dragend", () => {
      ship.classList.remove("dragging");
      draggedShip = null; // Reset after dragging ends
    });
  });

  // Drag Over Gameboard Cells
  boardCells.forEach((cell) => {
    cell.addEventListener("dragover", (e) => {
      e.preventDefault(); // Allow dropping
      highlightPlacement(cell); // Highlight potential ship placement
    });

    cell.addEventListener("dragleave", (e) => {
      clearHighlights();
    });

    // Drop Ship
    cell.addEventListener("drop", (e) => {
      e.preventDefault();

      if (!draggedShip) return; // Ensure a ship is being dragged

      const [row, col] = cell.dataset.cors.split(",").map(Number);

      placeShipOnBoard(row, col, shipLength);
      draggedShip.remove(); // Remove ship from the container after placement
      // Remove hover highlights
    });
  });

  // Highlight Placement
  function highlightPlacement(cell) {
    const [row, col] = cell.dataset.cors.split(",").map(Number);

    for (let i = 0; i < shipLength; i++) {
      const targetCell = document.querySelector(
        `.board-cell[data-cors="${row},${col + i}"]`
      );

      if (targetCell) {
        targetCell.classList.add("hover"); // Add hover effect
      }
    }
  }

  // Clear Highlighted Cells
  function clearHighlights() {
    document.querySelectorAll(".board-cell.hover").forEach((cell) => {
      cell.classList.remove("hover");
    });
  }

  // Place Ship on the Board
  function placeShipOnBoard(row, col, length) {
    console.log(`Placing ship of length ${length} at (${row}, ${col})`);

    for (let i = 0; i < length; i++) {
      const targetCell = document.querySelector(
        `.board-cell[data-cors="${row},${col + i}"]`
      );

      if (targetCell) {
        targetCell.classList.add("ship-placed"); // Mark cell as ship
        targetCell.style.backgroundColor = "red"; // Visual indicator
      } else {
        console.error(`Cell (${row}, ${col + i}) is out of bounds.`);
      }
    }
  }
};
