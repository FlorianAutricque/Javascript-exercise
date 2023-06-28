'use strict';
// ARROW FUNCTION

const calculAge3 = birthYear => 2023 - birthYear
const age3 = calculAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `The retirement age for ${firstName} is ${retirement} years`;
}

const Flo = yearsUntilRetirement(1992, "flo");
console.log(Flo);
