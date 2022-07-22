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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// -- OR assignment operator --
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// Using OR to set default values

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
// This is the logical OR assignment. Essentially the same as +=
// It's just a cleaner and more concise way to code it.

// -- NULLISH assignment operator --
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// -- AND assignment operator --
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// Because .owner does not exist in rest1, .owner is undefined and therefore a falsy value.
// Because it is falsy, it is the value that is immediately returned and not short-circuited.
// rest2.owner = rest2.owner && "<ANONYMOUS>";
// rest2.owner exists so it is truthy > evaluates and returns <ANONYMOUS>
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
// Logical AND assignment operator assigns value to a variable IF it is currently truthy.

console.log(rest1);
console.log(rest2);


--------------------------------
NULLISH COALESCING OPERATOR
--------------------------------

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);
// Using OR here does not work because numGuests = 0
// 0 is a falsy value, so it outputs 10, even though we know that numGuests exists in our code.

// Nullish: null and undefined (NOT 0 or '')
// Checks if value is null or undefined.
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
// Above is a solution to this problem. The 'nullish' operator.
// It works the same as OR but works around the bug of treating 0 as falsy even if the code exists.


--------------------------------
SHORT CIRCUITING (&& AND ||)
--------------------------------
console.log("-------- OR ---------");
// OR short-circuits at first TRUTHY value.
// Use any data type, return ANY data type, short-circuiting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);
// outputs "Hello" because it is the first truthy value

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// Real world applications of short-circuiting.
// if guest1 = numGuests if numGuests is true, else guests1 = 10 (default value). INEFFECIENT METHOD.
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// Here we use short-circuiting as an easier way to perform the above ternary operation. EFFICIENT METHOD.
// NOTE THAT BOTH METHODS ABOVE WILL NOT WORK IF numGuests = 0 as 0 is falsy!

console.log("-------- AND ---------");
// AND does the opposite of OR and short-cicuits at first FALSY value.
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "Jonas");

// Practical real-world examples
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

// Pretend that we don't know if .orderPizza exists
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// --- RECAP ---
// OR operator will return the first truthy value or the last value if all are falsy.
// AND will return the first falsy value or the last value if all are truthy.
// Practical applications: We can use the OR operator to set
// default values and we can use the AND operator to execute
// code in the second operant if the first one is true.


--------------------------------
REST PATTERN & PARAMETERS
--------------------------------

// Destructuring

// SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Destructure and rest paramter used
const [pizza, , risotto, ...otherFood] = [
  //Spread parameter used to create new array
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
// Spread operator
add(...x);

// Rest parameter serves to collect all unused parameteres
// Everything past 'mushroom' was stored in parameter 'otherIngredients'
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

--------------------------------
SPREAD OPERATOR
--------------------------------

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects.
const str = "Jonas";
const letters = [...str, "", "s."];
console.log(letters);
console.log(...str);

// Real world example using functions
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.table(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

--------------------------------
DESTRUCTURING OBJECTS
--------------------------------

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

--------------------------------
CODING CHALLENGE #1
--------------------------------
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

let printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored.`);
};

printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win.");
team1 > team2 && console.log("Team 2 is more likely to win.");
