'use strict';

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI
  }
};
mark.calcBMI();

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI
  }
};
john.calcBMI();
// console.log(john.BMI);
// console.log(john.calcBMI());


if (mark.BMI > john.BMI) {
  console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than
  ${john.fullName}'s BMI (${john.calcBMI()}) `);
} else if (mark.BMI < john.BMI) {
  console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than
  ${mark.fullName}'s BMI (${mark.calcBMI()}) `);
}
