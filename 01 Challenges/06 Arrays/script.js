"use strict";

// TEST data 1
// Julia = [3, 5, 2, 12, 7]
// Kate = [4, 1, 15, 8, 3]

//test data 2
// Julia = [9, 16, 6, 8, 3]
// Kate = [10, 5, 6, 1, 4]

const dogsJuliaData1 = [3, 5, 2, 12, 7];
const dogsKateData1 = [4, 1, 15, 8, 3];

const dogsJuliaData2 = [9, 16, 6, 8, 3];
const dogsKateData2 = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
  const dogsJuliaCorrect = arr1.slice(1, -2);

  const juliaKateDogs = arr2.concat(dogsJuliaCorrect);
  console.log(juliaKateDogs);
  console.log(dogsJuliaCorrect);

  juliaKateDogs.forEach(function (juliaKateDog, i, array) {
    const age = juliaKateDog >= 3 ? "adult" : "puppy";

    console.log(
      `Dog number ${i + 1} is an ${age}, and is ${juliaKateDog} years old`
    );
  });
};

checkDogs(dogsJuliaData1, dogsKateData1);
console.log("---DATA2---");
checkDogs(dogsJuliaData2, dogsKateData2);
