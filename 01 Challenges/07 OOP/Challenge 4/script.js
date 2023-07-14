"use strict";
//1.
class CarCl {
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

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    console.log(
      `${this.make} going at ${this.speed + 20}km/h, with a charge of ${this
        .#charge--}%`
    );
    return this;
  }
}

const car = new EVCl("rivian", 120, 23);
car.accelerate().accelerate().accelerate().chargeBattery(80).accelerate();
