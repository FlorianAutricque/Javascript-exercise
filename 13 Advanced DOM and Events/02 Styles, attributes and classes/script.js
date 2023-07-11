"use strict";

// Styles

message.style.backgroundColor = "#37383d";
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// attributes
console.log(link.href);
console.log(link.getAttribute("href"));

//classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();
