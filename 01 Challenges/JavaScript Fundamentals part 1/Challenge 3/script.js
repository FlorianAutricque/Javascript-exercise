const scoreDolphins = (96 + 108 + 89) / 3;
console.log(scoreDolphins);

const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else {
  console.log("Koalas win the trophy");
}
