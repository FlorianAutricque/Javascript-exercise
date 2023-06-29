"use strict";
// SETTINGS

const x = 23;

const calcAge = birthYear => 2040 - birthYear;

// Problem sovling skills

// 1- understanding the problem
// - ask questions to be sure to understand the issue

// 2- breaking the problem into sub-problems

// EXAMPLE
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/*PBLM: calculate the temperature amplitude. We need to keep in mind that there
might be a sensor error */

// 1-
// - What is temp amplitude? => diff between highest and lowest temp
// - what is a sensor temp ?

// 2-
// - how to ignore errors ?
// - find max and min value in array
// - subtract min from max and return it

const calclTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calclTempAmplitude(temperatures);
console.log(amplitude);

// MERDE 2 ARRAYS

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);

console.log(array3);
