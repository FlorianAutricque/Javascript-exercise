"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

console.log("Test start"); //run 1
setTimeout(() => console.log("0 sec timer"), 0); //run 4
Promise.resolve("resolved promise !").then(res => console.log(res)); //run3
console.log("end"); // run 2
