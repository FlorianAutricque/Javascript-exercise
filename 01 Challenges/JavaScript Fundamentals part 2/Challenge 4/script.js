'use strict';

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let index = 0; index < bills.length; index++) {
  // console.log(bills[index]);
  // console.log(calcTip(bills[index]));

  const tip = calcTip(bills[index]);
  tips.push(tip);
  // console.log(tips);

  // console.log(tip + bills[index]);
  const total = tip + bills[index]
  totals.push(tip + bills[index]);
  // console.log(totals);
}

console.log(bills, tips, totals);
