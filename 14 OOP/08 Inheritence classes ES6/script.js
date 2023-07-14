"use strict";

//INHERITENCE BETWEEN CLASSES ES6

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl("martha jo", 2012, "js");
martha.introduce();
