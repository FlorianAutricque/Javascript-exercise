"use strict";
//1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function (make, speed, battery) {
  Car.call(this, make, speed);
  this.battery = battery;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};

EV.prototype.accelerate = function () {
  console.log(
    `${this.make} going at ${this.speed + 20}km/h, with a charge of ${this
      .battery--}%`
  );
};
const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
