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

    grid.addEventListener("mouseenter", (e) => {
        if (e.target.id === "grid" || e.target.className === "row") return;

        e.target.style.backgroundColor = setColor(mode, e.target);
    }, true);

    return grid;
}

function removeGrid() {
    container.removeChild(grid);
}

function randomColor() {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return `rgb(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)})`;
}

function shading(target) {
    let color;

    if (target.style.backgroundColor === "") {
        color = [255, 255, 255];
    } else {
        color = target.style.backgroundColor.slice(4, -1).split(", ");
    }


    let [r, g, b] = color;
    console.log(target, color);
    return `rgb(${r - 25.5}, ${g - 25.5}, ${b - 25.5})`;
}

function setColor(mode, target) {
    switch (mode) {
        case "black color": {
            return "rgb(0, 0, 0)";
        }

        case "random color": {
            return randomColor();
        }

        case "shading": {
            return shading(target);
        }
    }
}


const container = document.querySelector(".container");
const size = document.querySelector("#size");
const sizeBy = document.querySelector("#sizeBy");
const clearBtn = document.querySelector("#clear");
const randomColorBtn = document.querySelector("#randomColor");
const shadingBtn = document.querySelector("#shading");
sizeBy.textContent = `${size.value}x${size.value}`
let mode = "black color";

let grid = createGrid(16);
container.appendChild(grid);

size.addEventListener("input", () => {
    removeGrid();
    sizeBy.textContent = `${size.value}x${size.value}`;
    grid = createGrid(size.value);
    container.appendChild(grid);
});

clearBtn.addEventListener("click", () => {
    removeGrid();
    grid = createGrid(size.value);
    container.appendChild(grid);
});

randomColorBtn.addEventListener("click", () => {
    if (mode === "black color") {
        mode = "random color";
        randomColorBtn.style.backgroundColor = "yellow";
    } else {
        mode = "black color";
        randomColorBtn.style.backgroundColor = "";
    }
});

shadingBtn.addEventListener("click", (e) => {
    if (mode !== "shading") {
        mode = "shading";
        shadingBtn.style.backgroundColor = "gray";
    } else {
        mode = "black color";
        shadingBtn.style.backgroundColor = "";
    }
});