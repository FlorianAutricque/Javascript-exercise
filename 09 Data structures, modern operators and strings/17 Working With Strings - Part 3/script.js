"use strict";

const [firstName, lastName] = "flo Autcq".split(" ");

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalization = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};
capitalization("jessica ann smith davis");

// padding
const message = "Go to 23";
console.log(message.padStart(25, "+"));

const maskCreditCard = function (number) {
  const str = number + ""; // String(number)
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(1432423343124431));
console.log(maskCreditCard("52353453425345"));

//Repeat
const message2 = "Bad weather... All departures delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(10);
planesInLine(13);
