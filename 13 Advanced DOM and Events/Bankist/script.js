"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnLearnMore = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const navLink = document.querySelectorAll(".nav__link");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//add cookie message
const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  '<h2>We use cookies for improved functionnality and analytics.</h2> <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);

//remove cookie message
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// styles cookie message
message.style.backgroundColor = "#37383d";
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

//smooth scroll down
btnLearnMore.addEventListener("click", function (event) {
  event.preventDefault();
  const s1 = section1.getBoundingClientRect();

  // scrolling
  section1.scrollIntoView({ behavior: "smooth" });
});

// page navigation
navLink.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.classList.contains("nav__link")) {
      const id = event.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});
