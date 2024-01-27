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

const container = document.querySelector(".container");
const grid = createGrid(16);

container.appendChild(grid);
grid.addEventListener("mouseenter", (e) => {
    if (e.target.id === "grid" || e.target.className ==="row") return;
    
    e.target.classList.add("colored");
}, true);