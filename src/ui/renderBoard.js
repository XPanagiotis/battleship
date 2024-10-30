import { createDOMElement } from "./domHelperFunctions/createElement";

export const renderBoard = function () {
  const yourBoard = document.querySelector(".your-gameboard");
  const enemyBoard = document.querySelector(".enemy-gameboard");

  yourBoard.appendChild(createBoard());
  enemyBoard.appendChild(createBoard());
};

function createBoard() {
  const table = createDOMElement("table", "board-table");
  const tableBody = createDOMElement("tbody");

  // Create rows
  for (var i = 0; i < 10; i++) {
    var boardRow = createDOMElement("tr", "board-row");

    // Create columns
    for (var j = 0; j < 10; j++) {
      var boardColumn = createDOMElement("td", "board-cell");
      boardColumn.dataset.cors = `${[i, j]}`;
      // Place indicators in the first row
      if (j <= 10 && i === 0) {
        const indicator = createDOMElement(
          "div",
          "indicator row-indicator",
          j + 1
        );
        boardColumn.appendChild(indicator);
      }

      // Place indicators in the first column
      if (j === 0) {
        const indicator = createDOMElement(
          "div",
          "indicator col-indicator",
          String.fromCharCode(65 + i)
        );
        boardColumn.appendChild(indicator);
      }

      boardRow.appendChild(boardColumn);
    }
    tableBody.appendChild(boardRow);
  }
  table.appendChild(tableBody);

  return table;
}
