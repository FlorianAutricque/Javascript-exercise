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

const runOnce = function () {
  console.log("this will run once");
};
runOnce();

// same as

(function () {
  console.log("this will run once");
})();

//not accesible
{
  const isPriveate = 23;
}
console.log(isPriveate);
