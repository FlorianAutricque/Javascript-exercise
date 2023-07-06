"use strict";

const flight = "LH234";
const flo = {
  name: "Flo Autcq",
  passport: 12432434,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = `Mr.` + passenger.name;

  if (passenger.passport === 12432434) {
    alert("Checked in");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, flo);
console.log(flight); //lh234
console.log(flo);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(flo);
checkIn(flight, flo);

// we are getting an issu here because we are manipulating the same object in
// 2 different functions
