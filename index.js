let grid = document.getElementById("grid");
let currentColor = "#000000";
let color = document.getElementById("color");
let width = 15;
let height = 15;

let inputGrid = 15;

grid.style.gridTemplateColumns = `repeat(15,${width}px)`;
grid.style.gridTemplateRows = `repeat(15,${height}px)`;

let clearCanvas = document.getElementById("clearCanvas");
color.addEventListener("input", (event) => {
  currentColor = event.target.value;
});

for (let i = 0; i < 225; i++) {
  let pixel = document.createElement("span");
  pixel.setAttribute("id", "pixel");
  grid.appendChild(pixel);
}

grid.addEventListener("click", (event) => {
  console.dir(event);
  if (event.target && event.target.matches("span#pixel")) {
    event.target.style.backgroundColor = currentColor;
  }
});
let elements = document.querySelectorAll("#grid > span");

clearCanvas.addEventListener("click", () => {
  elements.forEach((item) => {
    item.style.backgroundColor = "#ffffff";
  });
});

document.getElementById("resizeGrid").addEventListener("input", (event) => {
  if (event.target.value <= 25) {
    inputGrid = event.target.value;
  } else {
    alert("Invalid!!");
  }
});

document.getElementById("btnResize").addEventListener("click", () => {
  grid.style.gridTemplateColumns = `repeat(15,${inputGrid}px)`;
  grid.style.gridTemplateRows = `repeat(15,${inputGrid}px)`;
});