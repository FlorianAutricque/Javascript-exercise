'use strict';
// ARRAYS

const friends = ['Romain', 'bruno', 'hugo'];
console.log(friends);

const years = new Array(1992, 2993, 4343, 1950);
console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'totoy';
console.log(friends);

const firstName = 'flo'
const flo = [firstName, 'Autcq', 2023 - 1960];
console.log(flo);


const calcAge = function(birthYear) {
  return 2023 - birthYear;
}

const y = [1990, 1994, 2000, 2010, 2013];
const age1 = calcAge(y[0]);
const age2 = calcAge(y[1]);
const age3 = calcAge(y[y.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[y.length - 1])];
console.log(ages);
