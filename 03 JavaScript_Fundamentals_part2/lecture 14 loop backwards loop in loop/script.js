'use strict';
// LOOPING BACKWARDS, LOOP IN LOOP

const jonas = [
  'jonas',
  'flo',
  2040-1992,
  'dev',
  ['romain', 'bruno', 'hugo'],
  true
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

//loop in loop
for (let exercice = 1; exercice <= 3; exercice++) {
  console.log(exercice);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weight repetition ${rep}`);
  }
}
