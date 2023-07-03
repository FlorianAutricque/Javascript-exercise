"use strict";

function calcAge(birthYear) {
  const age = 2040 - birthYear;
  // console.log(firstName);

  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    // new block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      // creating new variable with the same name as the one outer the scope
      // it prints out didi in this scope because JS looks for the 1st one
      const firstName = "didi";

      const string = `Oh and you're a millenial, ${firstName}`;
      console.log(string);
    }
  }
  printAge();

  return age;
}

// the scope of the vairable age is all the function calcAge
// printAge is a child scop

// firstName is a global variable
// JS couldn't find the FN variable so it did a lookup
// in a scope chain

// firstName is found because js goes in the global scope

const firstName = "Flo";
calcAge(1992);

// if I try to log here age it won't work because I'm outside of
// the parent scope, same for printAge
