'use strict';
// OBJECT METHODS

const jonas = {
  firstName: 'jonas',
  lastName: 'flo',
  birthYear: 1990,
  age: 2040 - 1900,
  friends: ['jay', 'joe', 'chris'],
  hasDriverLicence: true,

  calcAge: function () {
    this.age = 2040 - this.birthYear;
    return this.age;
  },

  //method
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} years old teacher, and he has ${this.hasDriverLicence ? 'a' : 'no'} driver's licence`;
  }

};

// object calling the function here is jonas

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1992));
console.log(jonas.age);

console.log(jonas.getSummary());
