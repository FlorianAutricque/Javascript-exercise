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

const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);

console.log(orderSet); // removed the duplicates

orderSet.add("bread");
console.log(orderSet);
orderSet.delete("risotto");
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ["waiter", "chef", "waiter", "manger", "chef", "waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(
  new Set(["waiter", "chef", "waiter", "manger", "chef", "waiter"]).size
);
console.log(staffUnique.size);
