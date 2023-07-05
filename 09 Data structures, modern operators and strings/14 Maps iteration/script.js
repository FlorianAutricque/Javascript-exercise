"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openningHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 inheance litteral
  openningHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "22:00", address }) {
    console.log(
      `Order received, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your order with ${ing1}, ${ing2} and ${ing3}`);
  },
};

const question = new Map([
  ["question", "What is the best prog language ?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openningHours));
const hoursMap = new Map(Object.entries(openningHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array

console.log([...question]);
