"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("You WIN");
  } else {
    reject(new Error("You LOST"));
  }
}, 2000);

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//better than callback hell
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("wait 2 sec");
    return wait(1);
  })
  .then(() => console.log("waited for 1 sec"));
