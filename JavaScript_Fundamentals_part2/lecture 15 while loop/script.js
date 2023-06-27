'use strict';
// WHILE LOOP

// for (let rep = 1; rep < 11; rep++) {
//   console.log(`lifting weight repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('loop is ending');
}
