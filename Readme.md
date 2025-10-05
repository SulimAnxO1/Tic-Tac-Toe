# Tic-Tac-Toe 🎮

![License](https://img.shields.io/badge/License-MIT-green) ![HTML5](https://img.shields.io/badge/HTML5-orange) ![CSS3](https://img.shields.io/badge/CSS3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

A **classic Tic-Tac-Toe game** built with **HTML, CSS, and JavaScript**. Play **X vs O**, detect winners automatically, highlight winning boxes, and handle draw situations.

🔗 **Live Demo:** [Click Here to Play](https://your-live-demo-link.com)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Usage](#usage)
4. [File Structure](#file-structure)
5. [HTML Guide](#html-guide)
6. [CSS Guide](#css-guide)
7. [JavaScript Guide](#javascript-guide)
8. [Visual Grid & Winning Patterns](#visual-grid--winning-patterns)
9. [Technologies Used](#technologies-used)
10. [Screenshots](#screenshots)
11. [Contributing](#contributing)
12. [License](#license)

---

## Project Overview

This is a **web-based Tic-Tac-Toe game** for two players. The game detects **winners**, **draws**, and **highlights winning boxes**.

💡 **Learning opportunities for beginners:**

- HTML structure for a grid game
- CSS styling and animations
- JavaScript logic for turns, winner detection, and UI updates

---

## Features ✨

- Interactive **3x3 grid**
- **Two-player mode**: Player X vs Player O
- **Winning detection** with flashing highlight
- **Draw detection**
- **Reset Game** and **Start New Game** buttons
- Responsive design for desktop and tablet
- Beginner-friendly code with **clear comments**

---

## Usage 🎯

1. Open `index.html` in a browser.
2. Player O starts by clicking a box.
3. Players alternate marking X or O.
4. Game detects **winner or draw** automatically.
5. Winning boxes **flash gold/orange**.
6. Use **Start New Game** or **Reset Game** buttons to restart.

---

## File Structure 📁

```text
tic-tac-toe/
│
├─ index.html            # Main HTML file
├─ CSS/
│   └─ style.css         # Styling and animations
├─ JavaScript/
│   └─ app.js            # Game logic
└─ README.md             # Project documentation
```

## HTML Guide 📄

Key Sections:

<div class="msg-container hide">
  <p id="msg">Winner</p>
  <button id="new-btn">Start New Game</button>
</div>

<main>
  <h1>Tic Tac Toe</h1>
  <div class="container">
    <div class="game">
      <button class="box" title="Game Box 0"></button>
      ...
      <button class="box" title="Game Box 8"></button>
    </div>
  </div>
  <button id="reset-btn">Reset Game</button>
</main>

.msg-container → Displays winner/draw messages

.game → Holds 9 .box elements (3x3 grid)

.box → Clickable squares for X/O

# reset-btn → Clears board

# new-btn → Starts a new game

## CSS Guide 🎨

1. Global Styles

- { margin: 0; padding: 0; }
  body { background-color: rgb(145,145,145); text-align: center; }

2. Container

.container { height: 70vh; display: flex; justify-content: center; align-items: center; }

3. Game Board

.game { height: 60vmin; width: 60vmin; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 1.5vmin; }

4. Boxes

.box { height: 18vmin; width: 18vmin; border-radius: 1rem; border: none; box-shadow: 0 0 1rem rgb(0,0,0); font-size: 8vmin; color: rgb(70,4,4); }

5. Buttons

# reset-btn, #new-btn { padding: 1rem; font-size: 1.25rem; background-color: rgb(85,5,5); color: white; border-radius: 1rem; border: none; }

6. Messages

# msg { color: #FFD700; font-size: 5vmin; }

.msg-container { height: 100vmin; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 4rem; }
.hide { display: none; }

7. Winning Highlight

.winner { background-color: gold; color: black; font-weight: bold; animation: flash 0.5s ease-in-out infinite alternate; }
@keyframes flash { 0% { background-color: gold; } 50% { background-color: orange; } 100% { background-color: gold; } }

## JavaScript Guide 💻

Key Concepts:

turnO → Track which player's turn it is

count → Track total moves (for draw detection)

winPatterns → Arrays defining winning combinations

checkWinner() → Checks for a winner after each move

showWinner() → Displays winner message and disables boxes

gameDraw() → Handles draw scenario

enableBoxes() / disableBoxes() → Reset or lock the grid

Event listeners handle clicks and buttons

## Visual Grid & Winning Patterns 🗺️

Box Indices:
[0] [1] [2] ← Top row
[3] [4] [5] ← Middle row
[6] [7] [8] ← Bottom row

Winning Patterns:

Horizontal: [0,1,2], [3,4,5], [6,7,8]
Vertical: [0,3,6], [1,4,7], [2,5,8]
Diagonals: [0,4,8], [2,4,6]

ASCII Grid Examples

Player X wins top row:

X | X | X ← Winning row
O | | O
| O |

Player O wins diagonal:

X | X | O
X | O |
O | | X ← Winning diagonal

## Technologies Used 🛠️

HTML5 – Game structure

CSS3 – Styling, layout, and animations

JavaScript (ES6) – Game logic
