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

const eurowings = {
  name: "Eurowings",
  iataCode: "Ew",
  booking: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, "Marie Lo");
console.log(eurowings);
