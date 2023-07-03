"use strict";

// Temporal Dead Zone

// functions
console.log(addDec(2, 3));

console.log(addArrow(2, 3));

function addDec(a, b) {
  return a + b;
}

// this won't work because the only way to log a function before declaring
// it is to use a declaration function
const addArrow = (a, b) => a + b;
