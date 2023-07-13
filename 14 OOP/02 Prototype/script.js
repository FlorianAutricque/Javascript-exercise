"use strict";

//PROTOTYPE
const Person = function (firstName, birthYear) {
  //instance propreties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// to call a CF we need 'new'
const flo = new Person("flo", 1234);

const matilda = new Person("matilda", 1334);

Person.prototype.calcAge = function () {
  console.log(2040 - this.birthYear);
};

flo.calcAge();

console.log(Person.prototype.isPrototypeOf(flo));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person)); // false because it not the proto of person but of variable

Person.prototype.species = "Homo sapiens";
console.log(flo.species, matilda.species);

// species is not a real proprety of Person
