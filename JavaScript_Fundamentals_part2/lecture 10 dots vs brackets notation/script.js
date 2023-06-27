'use strict';
// DOTS VS BRACKETS NOTATION

const jonas = {
  firstName: 'jonas',
  lastName: 'flo',
  age: 2040 - 1900,
  friends: ['jay', 'joe', 'chris']
};

console.log(jonas);

// getting a proprety from an object = dot notation
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName, Lastname, age and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}


console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);
