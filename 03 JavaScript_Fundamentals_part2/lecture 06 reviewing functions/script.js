'use strict';
// REVIEWING FUNCTIONS

const calculAge = function (birthYear) {
  return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calculAge(birthYear);
  const retirement = 65 - age;
  // return retirement;

  if (retirement > 0) {
    return `The retirement age for ${firstName} is ${retirement} years`;
  } else {
    return -1;
  }
}

console.log(yearsUntilRetirement(1992, 'Flo'));
console.log(yearsUntilRetirement(1952, 'John'));
