"use strict";

// SCROLLING

//to know the position
console.log(window.scrollX, window.scrollY);

//height width
console.log(
  document.documentElement.clientHeight,
  document.documentElement.clientWidth
);

// scrolling
window.scrollTo(s1.left + window.scrollX, s1.top + window.scrollY);

//scrolling smooth
window.scrollTo({
  left: s1.left + window.scrollX,
  top: s1.top + window.scrollY,
  behavior: "smooth",
});

// or the modern way
section1.scrollIntoView({ behavior: "smooth" });
