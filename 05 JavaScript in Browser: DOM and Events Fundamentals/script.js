"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    //change the style of body to green

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "☝️ Number is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 You lost!";
    }
    // Other way to do it:
    // let x = Number(document.querySelector(".score").textContent);
    // if (x > 0) {
    //   x--;
    //   document.querySelector(".score").textContent = x;
    // } else {
    //   document.querySelector(".message").textContent = "😢 You lost!";
    // }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "👇 Number is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 You lost!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
