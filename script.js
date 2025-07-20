let cells = document.querySelectorAll(".cell");
let newgame = document.querySelector(".new");
let msg = document.querySelector("#msg")
let reset = document.querySelector("#reset");
let btn = document.querySelector(".board");
let con = document.querySelector(".container");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

];
const resetGame = () => {
    turn0 = true;
    enablecells();
    con.classList.add("hide");
    cells.forEach((cell) => {
        cell.innerText = "";
    })
}

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.innerText !== "") return;
        if (turn0) {
            cell.innerText = "O";
            turn0 = false;
        }
        else {
            cell.innerText = "X";
            turn0 = true;

        }
        cell.disabled = true;
        checkWinner();
    });
});
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = cells[pattern[0]].innerText;
        let pos2 = cells[pattern[1]].innerText;
        let pos3 = cells[pattern[2]].innerText;
        
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                disablecells();
                return;
            }
        }

    }
};
const disablecells = () => {
    for (let cell of cells) {
        cell.disabled = true;
    }
};
const enablecells = () => {
    for (let cell of cells) {
        cell.disabled = false;
    }
    msg.innerText = "";
};
const showWinner = (winner) => {
    msg.innerText = `🎉CONGRATULATIONS PLAYER ${winner} WON THE GAME`;
    con.classList.remove("hide")
};
newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
