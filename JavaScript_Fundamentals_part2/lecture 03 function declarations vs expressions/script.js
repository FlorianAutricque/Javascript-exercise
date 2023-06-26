'use strict';
// FUNCTION DECLARATIONS VS EXPRESSIONS

//function declaration:
//we can call it before we define it
const age1 = calculAge1(1992);
console.log(age1);

function calculAge1 (birthYear) {
  return 2023 - birthYear;
}


//function expression:

const calculAge2 = function (birthYear) {
  return 2023 - birthYear;
}

const age2 = calculAge2(1992);
console.log(age2);
