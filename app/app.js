// Globals Var
const gridContainer = document.querySelector(".container");

// Functions

function createGrid() {
  for (let i = 1; i <= 16; i++) {
    let row = document.createElement("div");
    gridContainer.appendChild(row);
    row.className = "row";

    for (let j = 1; j <= 16; j++) {
      let square = document.createElement("div");
      row.appendChild(square);
      square.className = "square";
    }
  }
}

createGrid();

// Watcher
const squareSelector = document.querySelectorAll(".square");
squareSelector.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "red";
  });
});
