"use strict";

//INHERITENCE BETWEEN CLASSES
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2040 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//linking prototype
Student.prototype = Object.create(Person.prototype);

const mike = new Student("Mike", 2020, "Computer");
console.log(mike);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

mike.introduce();
mike.calcAge();
