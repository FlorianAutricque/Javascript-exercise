"use strict";

// Selecting elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const currentScore0Elment = document.getElementById("current--0");
const currentScore1Elment = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;

// Rolling dicee
rollDice.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6 + 1);
  diceElement.classList.remove("hidden");
  diceElement.src = `images/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // add the class or remove it if it's not there
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
  }
});
