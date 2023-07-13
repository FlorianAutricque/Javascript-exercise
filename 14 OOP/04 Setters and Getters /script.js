"use strict";

//GETTERS AND SETTERS

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
}

const flo = new PersonCl("flo autcq", 1234);
const jo = new PersonCl("flo", 1234);
console.log(flo);

const account = {
  owner: "flo",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

//to call a setter
account.latest = 50;
console.log(account.movements);
