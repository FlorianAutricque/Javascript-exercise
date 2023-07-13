"use strict";

//OBJECT.CREATE

const PersonPrototype = {
  calcAge() {
    console.log(2040 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steve = Object.create(PersonPrototype);
steve.name = "Steve";
steve.birthYear = 1234;
console.log(steve);
steve.calcAge();

const sarah = Object.create(PersonPrototype);
sarah.init("sarah", 1234);
sarah.calcAge();
