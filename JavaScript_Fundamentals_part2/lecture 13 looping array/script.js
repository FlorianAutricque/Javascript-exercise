'use strict';
// LOOPING ARRAY, BREAKING AND CONTINUING

const jonas = [
  'jonas',
  'flo',
  2040-1992,
  'dev',
  ['romain', 'bruno', 'hugo'],
  true
];
const types = [];

for (let i = 0; i < jonas.length; i += 1) {
  // reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  // filling types array
  types[i] = typeof jonas[i];
};

console.log(types);

const years = [1991, 2000, 1934, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2040 - years[i]);
}

console.log(ages);

// continue and break
console.log('---CONTINUE---');

for (let i = 0; i < jonas.length; i += 1) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
};

console.log('---BREAK---');

for (let i = 0; i < jonas.length; i += 1) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
};
