"use strict";

//CLASSES

//class epxression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2040 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const flo = new PersonCl("flo", 1234);
console.log(flo);

flo.calcAge(); // work like the previous lecture

//this is like the method in the class PersonCl
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

flo.greet();
