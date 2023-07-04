"use strict";

// Unpacking all elements at once = SPREAD

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openningHours: {
    thu: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "22:00",
    address,
  }) {
    console.log(
      `Order received, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your order with ${ing1}, ${ing2} and ${ing3}`);
  },
};

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del sole, 31",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// SPREAD

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more
const menuJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuJoin);

// Iterables ; arrays, strings, maps, sets but NOT objects
const str = "Florian";
const letters = [...str, " "];
console.log(letters);

// Order with pasta
const ingredients = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt("let's make pasta! Ingredient 2?"),
  prompt("let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newResto = { foundedIn: 1998, ...restaurant, founder: "Geo" };
console.log(newResto);
