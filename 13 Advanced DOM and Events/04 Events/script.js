"use strict";

// EVENTS

const h1 = document.querySelector("h1");

// h1.addEventListener("mouseenter", function (event) {
//   alert("Hello");
// });

// h1.onmouseenter = function (event) {
//   alert("hola amigo");
// };

//random

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rbg(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
});

// page navigation\
// for not many links
navLink.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// for many links

// 1. add event listenner to common parent element
// 2. determine what element originated the event
document
  .querySelector(".nav__links")
  .addEventListener("click", function (event) {
    console.log(event.target);

    // check matching strategy
    if (event.target.classList.contains("nav__link")) {
      console.log("link");
    }
  });

// then

navLink.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.classList.contains("nav__link")) {
      const id = event.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});
