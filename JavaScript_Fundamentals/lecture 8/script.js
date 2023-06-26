const age = 15;
// const isOldEnough = age >= 18;
// console.log(isOldEnough);

if (age >= 18) {
  console.log('Sarah can start driving 🙌');
} else {
  const yearsLeft = 18 - age;
  console.log(`sarah is too young wait another ${yearsLeft} years`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
