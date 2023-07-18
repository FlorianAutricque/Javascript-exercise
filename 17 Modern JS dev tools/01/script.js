//importing module

// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from "./shoppingCart.js";

// addToCart("bread", 4);

// console.log(price, totalQuantity);

// // console.log(shippingCost); // not definied

console.log("importing module");

import * as ShoppingCart from "./shoppingCart.js";
ShoppingCart.addToCart("bread", 5);
console.log(ShoppingCart.totalPrice);

//import the default function
import add from "./shoppingCart.js";
add("pizza", 2);
