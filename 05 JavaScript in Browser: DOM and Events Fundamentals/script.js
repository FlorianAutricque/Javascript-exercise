"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    //change the style of body to green

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "☝️ Number is too high!"
          : "👇 Number is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 You lost!";
      document.querySelector(".score").textContent = 0;
    }

    //before
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".number").textContent = secretNumber;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  // console.log(secretNumber);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//before:
// Other way to do it:
// let x = Number(document.querySelector(".score").textContent);
// if (x > 0) {
//   x--;
//   document.querySelector(".score").textContent = x;
// } else {
//   document.querySelector(".message").textContent = "😢 You lost!";
// }
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "👇 Number is too low!";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "😢 You lost!";
//   }
