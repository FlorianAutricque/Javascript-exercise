// TYPE CONVERSION AND COERCION

const inputYear = '1991';
// convert this string to a number
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

//convert to a string
console.log(String(23));


// type coercion, '+, -, ...' act coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);


let n = '1' + 1; // 11
n = n - 1;
console.log(n);
