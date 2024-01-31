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

        e.target.style.backgroundColor = setColor(mode);
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

// function darkeningColor(target) {
//     function isGray(target) {
//         if (target.classList.contains("gray")) {
//             return true;
//         }

//         return false;
//     }

//     if (!isGray(target)) {
//         target.classList.add("gray");
//         return "rgb(230, 230, 230)";
//     }

//     let color = target.style.backgroundColor.slice(4, -1).split(", ");
//     let [r, g, b] = color;

//     return `rgb(${r - 25.5}, ${g - 25.5}, ${b - 25.5})`;
// }

function setColor(mode) {
    switch (mode) {
        case "black color": {
            return "rgb(0, 0, 0)";
        }

        case "random color": {
            return randomColor();
        }
    }
}


const container = document.querySelector(".container");
const size = document.querySelector("#size");
const sizeBy = document.querySelector("#sizeBy");
const clearBtn = document.querySelector("#clear");
const randomColorBtn = document.querySelector("#randomColor");
const darkeningBtn = document.querySelector("#darkening");
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

// darkeningBtn.addEventListener("click", (e) => {
//     if (setColor !== darkeningColor) {
//         setColor = darkeningColor;
//         darkeningBtn.style.backgroundColor = "gray";
//     } else {
//         setColor = blackColor;
//         darkeningBtn.style.backgroundColor = "";
//     }
// });