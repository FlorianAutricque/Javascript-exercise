"use strict";
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector(".header");
const allSections = document.querySelectorAll("section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
// insertAdjacentHTML
const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for improved functionnality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
header.append(message);

//remove cookie message
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });
