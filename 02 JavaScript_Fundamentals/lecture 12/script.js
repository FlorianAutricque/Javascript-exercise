// BOOLEAN LOGIC
// LOGICAL OPERATORS

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // and
console.log(hasDriversLicense || hasGoodVision); // or
console.log(!hasDriversLicense); // not

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Able to drive");
} else {
  console.log("Someone else should drive");
}
