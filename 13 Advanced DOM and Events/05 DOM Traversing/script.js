"use strict";

// DOM TRAVERSING
const h1 = document.querySelector("h1");

//going downwards ; child

console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "red";

// going upwards ; parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";

// going sideways
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
