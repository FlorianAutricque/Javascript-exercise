"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

console.log(lufthansa);

lufthansa.book(234, "Floflo");
lufthansa.book(434, "Hubert Jo");

const book = lufthansa.book;

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

book.call(eurowings, 23, "Marie Lo");
console.log(eurowings);

const swiss = {
  airline: "Swiss",
  iatacode: "SW",
  booking: [],
};

const flightData = [543, "George Bush"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(23, "Steven Willi");

const bookEW23 = book.bind(eurowings, 23); // preset 23
bookEW23("flo autcq");

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
