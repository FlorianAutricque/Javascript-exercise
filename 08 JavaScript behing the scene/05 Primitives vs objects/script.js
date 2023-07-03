"use strict";

// PRIMITIVES vs OBJECTS

// Primitives = string, number, boolean ...

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); //30

const me = {
  name: "flo",
  age: 30,
};

const friend = me;
friend.age = 23;
console.log("friend:", friend); //23
console.log("me", me); // 23
