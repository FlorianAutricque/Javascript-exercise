"use strict";

// REGULAR AND ARROW FUCNTIONS

const flo = {
  firstName: "flo",
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2040 - this.year);
  },

  // undifined because this is the window object, and there is no firstName object
  // never use an arrow function as a method
  greet: () => console.log(`Hey ${this.firstName}`),

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
flo.greet();
