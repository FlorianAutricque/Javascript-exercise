"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    // 3- FIX THE BUG
    value: Number(prompt("Degrees celcius:")),
  };

  // 2- FIND THE BUG
  // log the whole object
  console.log(measurement);
  // we see that the value is a string, because prompt always
  //return a string and then concatenante the strings

  //we console log measurement.value to see if the bug comes from here
  console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// 1- IDENTIFY THE BUG
console.log(measureKelvin());
