"use strict";
//1.
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(this.speed + 10);
  }

  brake() {
    console.log(this.speed - 5);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new Car("Ford", 120);

console.log(car1.speedUS);
car1.accelerate();

car1.brake();

car1.speedUS = 50;
console.log(car1);
