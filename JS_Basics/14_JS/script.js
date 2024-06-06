let won = false;
let player = "X"
const boxes = document.getElementsByClassName("box");

function createBoxes(y) {
    if (boxes[y].innerHTML == "" && won != true) {
        boxes[y].innerHTML = player;
        winconditions();
        if (player = "X" && won != true) {
            player = "O";
        }
        else if (won != true) {
            player = "X";
        }

    }
}

function winconditions() {
    if (
        (boxes[0] != "" && boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML) ||
        (boxes[0] != "" && boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML) ||
        (boxes[0] != "" && boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML) ||
        (boxes[1] != "" && boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML) ||
        (boxes[2] != "" && boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML) ||
        (boxes[2] != "" && boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML) ||
        (boxes[3] != "" && boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML) ||
        (boxes[6] != "" && boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML)
    ) {
        won = true;
    }
}