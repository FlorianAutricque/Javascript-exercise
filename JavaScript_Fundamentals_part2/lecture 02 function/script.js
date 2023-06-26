'use strict';
// FUNCTION
//function is used to re use the code inside the function.
//we just need to call it using it's name
function logger() {
  console.log("My name is Flo");
}

//calling or runing or invoking the function:
logger();

// here apples and oranges are PARAMETERS

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// here 3 and 0 are called ARGUMENTS
const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);
console.log(fruitProcessor(3, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
