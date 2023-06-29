"use strict";

// // Select an element using querySelector
// // Then we can read the text content proprety using textContent
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 18;
// //.value to an input field
// document.querySelector(".guess").value = 13;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".number").textContent = "⛔ No number";
  }
});
