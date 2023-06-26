// EQUALITY OPERATORS

const age = 18;

// strict equality operator ===
if (age === 18) console.log("You are an adult");

// loose equality operator ==
if (age == 18) console.log("You are an adult");

const favourite = Number(prompt("What is your favourite number ?"));
console.log(favourite);

if (favourite === 23) {
  console.log("23 is a cool number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number777");
} else {
  console.log("Number is not 23 or 7");
}

// different

if (favourite !== 23) {
  console.log("Why not 23?");
} else {
  console.log("amazing number");
}
