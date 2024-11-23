import { createDOMElement } from "./createElement";

export const createBoard = function () {
  const table = createDOMElement("table", "board-table");
  const tableBody = createDOMElement("tbody");

  // Create rows
  for (let i = 0; i < 10; i++) {
    const boardRow = createDOMElement("tr", "board-row");

    // Create columns
    for (let j = 0; j < 10; j++) {
      const boardColumn = createDOMElement("td", "board-cell");
      boardColumn.dataset.cors = `${i},${j}`; // Coordinate data attribute

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
};
