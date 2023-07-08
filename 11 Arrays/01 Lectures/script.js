"use strict";

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
let arr = ["a", "b", "c", "d", "e"];

//slice
console.log(arr.slice(2)); // c to the end
console.log(arr.slice(2, 4)); // c d, exclude the 4
console.log(arr.slice(-2));
console.log(arr.slice(1, -2)); // b c

//splice = delete element of an array

console.log(arr.splice(2));
console.log(arr);

//reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2); // mutate the original array

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//join
console.log(letters.join(" - "));

*/
/*
const arr = [23, 11, 33];
console.log(arr[0]);
console.log(arr.at(0));

//getting last element of array
console.log(arr[arr.length - 1]); // to know the last element of an array
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("flo".at(0));
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movements ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movements ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movements ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movements ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
});

*/

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// MAP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Functional programming
const eurToUsd = 1.1;
const movementUSD = movements.map(function (movement) {
  return movement * eurToUsd;
});
console.log(movementUSD);

const movementUSDarrow = movements.map(movement => movement * eurToUsd);
console.log(movementUSDarrow);

//WITH FOR
const movementUSDfor = [];
for (const movement of movements) movementUSDfor.push(movement * eurToUsd);
console.log(movementUSDfor);
