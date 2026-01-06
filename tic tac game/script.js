let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset_btn");
let msg = document.querySelector("#msg");

let truno = true;
const win_patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const reset_game = () => {
  truno = true;
  msg.innerHTML = "";
  enable_box();
};

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (box.innerText !== "") return;

    console.log("button clicked");
    if (truno) {
      box.innerText = "O";
      truno = false;
    } else {
      box.innerText = "X";
      truno = true;
    }

    checkwinner();
  });
});
const enable_box = () => {
  for (let box of boxes) {
    box.style.pointerEvents = "auto";
    box.innerText = "";
  }
};
const disablebox = () => {
  boxes.forEach((box) => {
    box.style.pointerEvents = "none";
  });
};
const checkwinner = () => {
  for (let pattern of win_patterns) {
    

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 == pos2 && pos2 == pos3) {
        msg.innerHTML = `Winner is ${pos1}`;
        disablebox();
        return;
      }
    }
    let allFilled = true;
    for (let box of boxes) {
      if (box.innerText === "") {
        allFilled = false;
        break;
      }
    }
    if (allFilled) {
      msg.innerHTML = "Game is draw\n reset game ";
    }
  }
};
reset.addEventListener("click", reset_game);
