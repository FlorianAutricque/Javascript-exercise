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

const rest1 = {
  name: "capri",
  numGuests: 20,
};

const rest2 = {
  name: "la plaza",
  owner: "fabricio",
};

// Apply the number of guests to the obejct that do not have them

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignement operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

//nullish assignement operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignement operator
rest1.owner &&= "Anonymous";
rest2.owner &&= "Anonymous";

console.log(rest1, rest2);
