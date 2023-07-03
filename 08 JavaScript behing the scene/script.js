"use strict";

function calcAge(birthYear) {
  const age = 2040 - birthYear;
  // console.log(firstName);

  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    // new block scop
    if (birthYear >= 1981 && birthYear <= 1996) {
      const string = `Oh and you're a millenial, ${firstName}`;
      console.log(string);
    }
  }
  printAge();

  return age;
}

// the scop of the vairable age is all the function calcAge
// printAge is a child scop

// firstName is a global variable
// JS couldn't find the FN variable so it did a lookup
// in a scop chain

// firstName is found because js goes in the global scop

const firstName = "Flo";
calcAge(1992);

// if I try to log here age it won't work because I'm outside of
// the parent scop, same for printAge
