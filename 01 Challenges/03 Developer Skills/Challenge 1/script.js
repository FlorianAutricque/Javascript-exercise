"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(
  `... ${data1[0]} C in 1 days ...${data1[1]} C in 2 days ...${data1[2]} C in 3 days ...`
);

const printForecast = function (arr) {
  let d = "";
  for (let i = 0; i < arr.length; i++) {
    d = d + ` ... ${arr[i]} C in ${i + 1} days`;
  }
  console.log(d);
};

printForecast(data1);

// create a function
// take arr as parameter
// log a string
// iterate for each temp
