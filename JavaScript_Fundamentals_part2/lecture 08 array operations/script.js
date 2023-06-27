'use strict';
// ARRAYS OPERATIONS

//push = add to the array at the end
const friends = ['romain', 'bruno', 'totoy'];
const newLength = friends.push('hugo');
console.log(friends);
console.log(newLength);

// unshift = add at the begining of the array
friends.unshift('gaspard');
console.log(friends);

//pop = remove last element of array
friends.pop();
console.log(friends);

//shift = remove the first element of array
friends.shift();
console.log(friends);

//retrun index where element is located
console.log(friends.indexOf('bruno'));

//includes = to know if element is in the array
console.log(friends.includes('romain'));
console.log(friends.includes('bob'));
