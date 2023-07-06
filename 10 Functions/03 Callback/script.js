"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// / /g = spaces in the input string that will be remove = ""

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
};

transformer("JavaScript is super cool", upperFirstWord);
transformer("JavaScript is super cool", oneWord);
