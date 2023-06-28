// OPERATORS
const now = 2040;
const ageJonas = now - 1992;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2**3);
// 2**3 means 2*2*2

// concatenate strings
const firstName = 'flo';
const lastName = 'autcq';
console.log(firstName + ' ' + lastName);

// assignement operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// comparison operators = to create booleans values
console.log(ageJonas < ageSarah);
console.log(ageSarah >= 20);

const isFullAge = ageSarah >= 20;

// OPERATOR PRECEDENCE

console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);
