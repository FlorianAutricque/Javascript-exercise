"use strict";

const airline = "AIR France";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log("B737"[0]); //B

// strings have also methods

//case sensitive

console.log(airline.indexOf("r")); // gives the first one
console.log(airline.lastIndexOf("r")); // gives the last one

// Slice method = extract part of a string => needs index
console.log(airline.slice(4)); // 4 is the position where the extraction starts

console.log(airline.slice(0, airline.indexOf([" "]))); // air
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // france

console.log(airline.slice(-2)); // start by the end

const checkMindleSeat = function (seat) {
  //B and E are middle seat
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You are not in the middle seat");
};
checkMindleSeat("11B");
checkMindleSeat("3E");
checkMindleSeat("26A");
