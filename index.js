function createSquare(row) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
}

function createRow(squares, grid) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < squares; i++) {
        createSquare(row);
    }

    grid.appendChild(row);
}

function createGrid(rows) {
    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");

    for (let i = 0; i < rows; i++) {
        createRow(rows, grid);
    }

    return grid;
}

function removeGrid() {
    container.removeChild(grid);
}

const container = document.querySelector(".container");
const size = document.querySelector("#size");
const sizeBy = document.querySelector("#sizeBy");
sizeBy.textContent = `${size.value}x${size.value}`

let grid = createGrid(16);
container.appendChild(grid);

grid.addEventListener("mouseenter", (e) => {
    if (e.target.id === "grid" || e.target.className === "row") return;

    e.target.classList.add("colored");
}, true);

size.addEventListener("input", () => {
    removeGrid();
    sizeBy.textContent = `${size.value}x${size.value}`;
    grid = createGrid(size.value);
    container.appendChild(grid);

    grid.addEventListener("mouseenter", (e) => {
        if (e.target.id === "grid" || e.target.className === "row") return;

        e.target.classList.add("colored");
    }, true);
});