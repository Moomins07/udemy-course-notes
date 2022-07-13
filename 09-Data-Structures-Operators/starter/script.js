"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // created method to order from menu using array positions/index
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del sole, 21",
  starterIndex: 1,
});

// Basic destructure of properties
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Switching property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
--------------------------------
DESTRUCTURING ARRAYS
--------------------------------

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//destructuring follows the order of the elements (0,1,2 etc).
//to destructure and assign variables to specific elements
//we must add an empty space. this skips an element in
//the array 

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

 //this is a very convoluted way of using a 'middle-man' variable (temp)
 //to switch main and secondary around. However, we can use destructuring to make
 //this much easier: 


[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
//after invoking our order method to retrieve elements from our restaurant object arrays,
//we destructure the result and assign the results of (2, 0) to the variables 'starter' & 'main'.
console.log(starter, mainCourse);

// How to destructure a nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // This returns 2, [5, 6] as j is assigned the entire neste array.
// if we also want the indivual values inside of the nested array, we have to destructure inside of destructuring.

const [i, , [j, k]] = nested; // destructure inside of a destructure (skipped 4 again)
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
// If an array is longer than we know, this replaces undefined with a 1/sets default value of 1.
*/
