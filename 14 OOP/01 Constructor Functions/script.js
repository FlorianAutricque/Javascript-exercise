"use strict";

//coonstructor function
const Person = function (firstName, birthYear) {
  //instance propreties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// to call a CF we need 'new'
const flo = new Person("flo", 1234);
console.log(flo);

const matilda = new Person("matilda", 1334);

console.log(matilda instanceof Person);
