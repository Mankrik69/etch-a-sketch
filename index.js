function createSquare(row) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
}

function createRow(squares) {
    const row = document.createElement("div");
    row.classList.add("row");
    
    for (let i = 0; i < squares; i++) {
        createSquare(row);
    }

    container.appendChild(row);
}

const container = document.querySelector(".container");