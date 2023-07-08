"use strict";

const DATA1 = [5, 2, 4, 1, 15, 8, 3];
const DATA2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  const adults = humanAge.filter(age => age >= 18);
  console.log(adults);
  const average = adults.reduce((acc, age) => acc + age / adults.length, 0);
  return average;
};

calcAverageHumanAge(DATA1, DATA2);
console.log(calcAverageHumanAge(DATA1));
console.log(calcAverageHumanAge(DATA2));
