"use strict";

// STICKY NAVIGATION
const coords = section1.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (this.window.scrollY > coords.top) nav.classList.add("sticky");
});
