"use strict";
//1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
console.log(car1, car2);

//2.
Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};

car1.accelerate();
car2.accelerate();

//3.
Car.prototype.brake = function () {
  console.log(this.speed - 5);
};
car1.brake();
car2.brake();
