//TRUTHY AND FALSY VALUES
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Flo'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

// 0 act like a falsy value

let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined");
}

// height is not define so it's a falsy value
