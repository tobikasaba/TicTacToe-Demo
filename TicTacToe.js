let tableCells = document.querySelectorAll("td")
let button = document.getElementById("btnRefresh")

function clearCells() {
    for (let i = 0; i < tableCells.length; i++) {
        tableCells[i].textContent = "";
    }
}

button.addEventListener("click", clearCells)

function changeCell() {
    if (this.textContent === "") {
        this.textContent = "X"
    } else if (this.textContent === "X") {
        this.textContent = "O"
    } else {
        this.textContent = ""
    }
}

this
for (let i = 0; i < tableCells.length; i++) {
    tableCells[i].addEventListener("click", changeCell)
}
