// Globals Var
const gridContainer = document.querySelector(".container");
const button = document.querySelector("#add");

// Functions

function buildGrid(width = 16, height = 16) {
  let container = document.createElement("div");
  container.className = "container";
  for (let i = 1; i <= width; i++) {
    let row = document.createElement("div");
    gridContainer.appendChild(row);
    row.className = "row";

    for (let j = 1; j <= height; j++) {
      let square = document.createElement("div");
      row.appendChild(square);
      square.className = "square";
    }
  }
}

function sketch() {
  const squareSelector = document.querySelectorAll(".square");
  squareSelector.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });
  });
}

buildGrid();
sketch();

// Watcher

button.addEventListener("click", () => {
  let width = prompt("Enter a number for the width");
  let height = prompt("Enter a number for the height");
  if (isNaN(width) === false && isNaN(height) === false) {
    if (width > 1 && width <= 100 && height > 1 && height <= 100) {
      gridContainer.replaceChildren();
      buildGrid(width, height);
      sketch();
    } else if (!width || !height) {
      gridContainer.replaceChildren();
      buildGrid();
      sketch();
    } else {
      alert(
        "Please enter a number between 2 and 100. Or empty for the default grid"
      );
    }
  } else {
    alert("Please enter a number only. Max 100");
  }
});
