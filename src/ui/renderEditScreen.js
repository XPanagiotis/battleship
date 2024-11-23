import { createBoard } from "./domHelperFunctions/createBoard";
import { createDOMElement } from "./domHelperFunctions/createElement";

export const renderEditScreen = function (e) {
  document.getElementById("game-status").textContent =
    "Drag the ships to the grrid and then click to rotate";

  const gameboardToEdit = e.target.attributes["data-gameboard"].value;

  const gameboardContainers = document.querySelectorAll(".gameboard-container");

  gameboardContainers.forEach((gameboard) => {
    gameboard.style.display = "none";
  });

  const containerParent = document.querySelector(".gameboards");
  const container = createDOMElement("section", "edit-screen");
  const wrapper = createDOMElement("div", "board-to-edit");
  const btnContainer = document.querySelector(".button-container");
  const shipsContainer = createDOMElement("div", "ships-container");
  const gameboard = createDOMElement("div", "gameboard");
  const table = createBoard();

  for (let i = 0; i <= 5; i++) {
    let ship = createDOMElement("div", "ship", "", "ship");
    ship.setAttribute("draggable", true);
    shipsContainer.appendChild(ship);
    if (i == 0) {
      ship.setAttribute("data-lenght", 5);
      ship.setAttribute("style", "--ship-length: 5;");
    } else if (i == 1) {
      ship.setAttribute("data-lenght", 4);
      ship.setAttribute("style", "--ship-length: 4;");
    } else if (i == 2 || i == 3) {
      ship.setAttribute("data-lenght", 3);
      ship.setAttribute("style", "--ship-length: 3;");
    } else {
      ship.setAttribute("data-lenght", 2);
      ship.setAttribute("style", "--ship-length: 2;");
    }
  }

  if (gameboardToEdit == "1") {
    var title = createDOMElement("h2", "", "Player's 1 Gameboard");
  } else {
    var title = createDOMElement("h2", "", "Player's 2 Gameboard");
  }

  gameboard.appendChild(table);
  wrapper.appendChild(gameboard);
  wrapper.appendChild(shipsContainer);
  container.appendChild(title);
  container.appendChild(wrapper);
  container.appendChild(btnContainer);
  containerParent.appendChild(container);
};
