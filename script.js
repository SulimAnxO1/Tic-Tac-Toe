// =============================
// 🎮 TIC-TAC-TOE GAME SCRIPT
// =============================

//-------------------------
// 🔗 Select DOM Elements
//-------------------------
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//-------------------------
// ⚡ Game State Variables
//-------------------------
let turnO = true; // true = Player O's turn, false = Player X's turn
let count = 0; // Move counter (used to check draw)

//--------------------------------------------
// 🏆 Winning Combinations (indexes of boxes)
//--------------------------------------------
const winPatterns = [
  [0, 1, 2], // Top row
  [0, 3, 6], // Left column
  [0, 4, 8], // Left diagonal
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [2, 4, 6], // Right diagonal
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
];

// ------------------------------
// 🔄 Reset & New Game Functions
// ------------------------------
const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
  boxes.forEach((box) => box.classList.remove("winner")); // Remove winning highlight
};

//---------------------------------
// 🎯 Game Logic (Box Click Event)
//---------------------------------
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "⭕"; // Player O move
      turnO = false;
    } else {
      box.innerText = "❌"; // Player X move
      turnO = true;
    }
    box.disabled = true; // Disable after marking
    count++;

    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw(); // Trigger draw if all 9 moves done & no winner
    }
  });
});

//-------------------
// 🤝 Draw Handling
//-------------------
const gameDraw = () => {
  msg.innerText = `Game Draw! Try again.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

//--------------------------
// ⛔ Enable/Disable Board
//--------------------------
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("winner");
  }
};

//---------------------
// 🏆 Winner Handling
//---------------------
const showWinner = (winner, winningPattern) => {
  let winnerSymbol = winner === "⭕" ? "Player O" : "Player X";
  msg.innerText = `🎉 Player ${winner} Wins!`;
  msgContainer.classList.remove("hide");

  // Highlight winning boxes
  winningPattern.forEach((index) => {
    boxes[index].classList.add("winner");
  });

  disableBoxes();
};

//--------------------------
// 🧠 Winner Checking Logic
//--------------------------
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val, pattern); // Pass the winning pattern
        return true;
      }
    }
  }
};

//------------------
// 🎮 Button Events
//------------------
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
