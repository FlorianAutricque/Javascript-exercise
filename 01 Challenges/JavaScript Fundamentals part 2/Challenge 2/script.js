'use strict';


const tip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = (bill * 15 )/ 100;
    return tip;
  } else {
    let tip = (bill * 20)/100;
    return tip;
  }
}

// const bill1 = tip(100);
// console.log(bill1);

const bills = [125, 555, 44];

const tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2] ]
console.log(total);
