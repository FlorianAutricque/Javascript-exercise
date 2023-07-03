"use strict";

// THIS Keyword

/*points to the 'owner' of the function, the value of THIS is not static
 */

// Here THIS refer to flo. so the year of flo
// Here calcAge is a method

const flo = {
  name: "flo",
  year: 1992,
  calcAge: function () {
    return 2040 - this.year;
  },
};

flo.calcAge();
console.log(flo.calcAge());
