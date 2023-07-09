"use strict";
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Mathilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Micheal"] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFoog = Math.trunc(dog.weight ** 0.75 * 28))
);
// console.log(dogs);

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(sarahDog);
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFoog ? "much" : "little"
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFoog)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFoog)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
const x = ownersEatTooMuch.join(" ");
console.log(`${x}'s dogs eat too much`);

const y = ownersEatTooLittle.join(" ");
console.log(`${y}'s dogs eat too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFoog));

// 6.
const check = dog =>
  dog.curFood > dog.recommendedFoog * 0.9 &&
  dog.curFood < dog.recommendedFoog * 1.1;
console.log(dogs.some(check));

// 7.
console.log(dogs.filter(check));

//8.
const sorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFoog - b.recommendedFoog);
console.log(sorted);
