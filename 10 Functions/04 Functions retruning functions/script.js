"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//Arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet("Hi");
greeterHey("flo");
greeterHey("hugo");
console.log(greeterHey);
