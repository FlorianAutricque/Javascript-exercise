const firstName = 'Flo';
const job = 'web dev';
const birthYear = 1992;
const year = 2023;

//concatenation
const flo = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(flo);

// template string
const floNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(floNew);

// multiple lines = use ``
console.log(`string
with
multiple
lines`);
