"use strict";

const airline = "AIR France";
const plane = "A320";

// changing case of string

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = "fLoRian";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// function to change any name into correct capitalization
const correct = function (firstName) {
  const firstNameLower = firstName.toLowerCase();
  const firstNameCorrect =
    firstNameLower[0].toUpperCase() + firstNameLower.slice(1);
  return firstNameCorrect;
};

console.log(correct("fwaFDe"));

// Comparing email
const email = "hello@flo.com";
const loginEmail = " Hello@Flo.Com \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);

//function to compare email
const correctEmail = function (emailFunction) {
  const normalizeEmail = emailFunction.toLowerCase().trim();
  return normalizeEmail;
};
console.log(correctEmail("Hello@Flo.Com \n"));
console.log(correctEmail("DgrEFSAEF@Gmail.com   "));

// replacing
const priceE = "288,29E";
const priceUS = priceE.replace("E", "$").replace(",", ".");
console.log(priceUS);

//replace all
const annoucement = "All passenger come to boarding door 23, door 23";
console.log(annoucement.replaceAll("door", "gate"));

// booleans
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.startsWith("Airb"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of airbus ");
}

// exercice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not welcome onboard");
  } else {
    console.log("You are welcome");
  }
};

checkBaggage("I have a gun and a knife YOLO");
checkBaggage("I have socks and pyjamas");
