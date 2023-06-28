'use strict';
const calcAverage = (score1, score2, score3) => {
  const calcAverage = (score1 + score2 + score3) / 3;
  return calcAverage;
}

// console.log(calcAverage(44, 23, 71));

//data 1:
let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)
console.log(scoreDolphins, scoreKoalas);

//data 2:
// scoreDolphins = calcAverage(75, 54, 41)
// scoreKoalas = calcAverage(23, 34, 27)
// console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (averageDolphins, averageKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolhpins win (${averageDolphins} vs. ${averageKoalas})`);
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})`);
  } else {
    console.log("No team wins ...");
  }
}

const DATA1 = checkWinner(scoreDolphins, scoreKoalas);
// const DATA2 = checkWinner(scoreDolphins, scoreKoalas);
