"use strict";

//STATIC METHODS

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const flo = new Person("flooo", 1234);
const jo = new Person("flo", 1234);
console.log(flo);

Person.hey = function () {
  console.log("Hey");
};

Person.hey();

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //instance methods
  calcAge() {
    console.log(2040 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2040 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //static method
  static hey() {
    console.log("Hey");
  }
}

PersonCl.hey();
