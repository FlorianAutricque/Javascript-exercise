"use strict";

// PRIMITIVES vs OBJECTS

// Primitives = string, number, boolean ...

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); //30

// age is store in an address. Age is != 30 but = the address which holds the value of 30
// oldAge = address of value 30
//age is redefinied to a new address which holds the value of 31.

const me = {
  name: "flo",
  age: 30,
};

const friend = me;
friend.age = 23;
console.log("friend:", friend); //23
console.log("me", me); // 23

// me has an address which holds a value that is an address in the heap
// that holds value

//friend has the same address of me that has an value/address which has a value
// that will change to 27

//Primitives
let lastName = "Henrique";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//Objects
const jessica = {
  firstName: "Jessica",
  lastName: "Henrique",
  age: 27,
};

// this won't work
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log(jessica);
console.log(marriedJessica);

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Henrique",
  age: 27,
};

// Shadow copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log(jessica2);
console.log(jessicaCopy);
