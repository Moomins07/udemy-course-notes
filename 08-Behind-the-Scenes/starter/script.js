"use strict";
/*
// Defined in global scope. Top-level code.
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  //console.log(firstName); //firstName is global scope so variable look up is successful

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // BLOCK SCOPE
      var millennial = true;
      // Creating NEW variable with same name  as outer scope's variable.
      const firstName = "Steven"; // JS will try to use variables in the current scope. JS uses firstName (Steven) here in the CURRENT scope and not firstName (Jonas) in the GLOBAL scope due to this.

      // Reassigning outer scope's variable.
      output = "NEW OUTPUT!"; // We manipulated an existing variable inside of a child/inner scope. We did not create a new variable, we re-defined a variable that we accessed from a parent scope.

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);

    //console.log(str); // We cannot use 'str' outside of the if block using let or const variables!! 'not defined error'

    console.log(millennial); // This will work because millennial was declared inside the if block using var! NOT let or const. Var is only function scoped.

    // add(2, 3); // Again, this will not work because the add() function is defined inside of the if block. Functions are block scoped in STRICT MODE. We cannot invoke add() outside of the same block.
  }
  printAge();
  return age;
}

const firstName = "Jonas"; // global variable
calcAge(1991);
//console.log(age); // Here we cannot access the age variable because 'age' is inside a function. (child scope)

//printAge(); // The same can be said here with the printAge() function. It is inside of calcAge function and so therefore is not accessible outside.


// HOISTING AND TDZ PRACTICE

// Variables :

console.log(me); // Returns undefined because Var variables ARE hoisted to the value of undefined.

// console.log(job); // ReferenceError: Cannot access 'job' before initialization. (In TDZ)

// console.log(year); // ReferenceError: Cannot access 'year' before initialization. (In TDZ)

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions :
console.log(addDecl(2, 3)); // Successfully invoked function decl before function code;

console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization. (In TDZ)

console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization. (In TDZ)

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  // function defined with const variable, TDZ applies, can only invoke function after variable decl.
  return a + b;
};

var addArrow = (a, b) => a + b;

// If we change const to var, we receive the error 'TypeError: addArrow is not a function'. This is because when 'var' hoists, it sets the variable to undefined. So if we call var addExpr before the code, we're actually calling undefined.

// The only function type we can invoke before declaring it is Function Declaration!!

// EXAMPLE

if (!numProducts) deleteShoppingCart(); // Again, numProducsts here is set to undefined as we've hoisted a variable defined by var.

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

// To Summarise
// Exercise good coding practices such as: not using 'var', invoking functions after you have declared them (including function declaration), this includes declaring variables at the top of each scope, preferably with const.

var x = 1;
let y = 2;
const z = 3;

// variables defined with var are placed on the global window object.


//  ----------------------------
// 'THIS' KEYWORD EXAMPLES
//  ----------------------------

// console.log(this); // 'this' outside of any function, in the global scope, points to the global window object.

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(1991);
// In this regular fuction call (function not attached to any object(no owner)), 'this' is undefined due to strict mode. Outside of strict mode, 'this' would again point to the global window object here.

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAgeArrow(1980);
// 'this' points to the global window object here in arrow function because it is the parent scope.
// The arrow function does NOT get its own 'this' keyword, instead the arrow function uses the lexical 'this' keyword. It uses the 'this' keyword of its parent scope.

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();
//'this' is used as a method here. (has a parent object/'owner')
// Inside of an object 'this' will point to the object.
// When we have a method call, the 'this' keyword inside of the method will be the object that is calling the method. (jonas)

// The reason 'this' pointed to jonas is because jonas was the object calling that method.

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // Method borrowing, copied over method from jonas to matilda.

matilda.calcAge(); // 'this' will always point to the object that is calling the method. 'this' in this case now points to matilda.

// Even though the method we called is inside of the jonas object, the 'this' keyword will still point to matilda if it is matilda that calls the method.

const f = jonas.calcAge; // copying method into 'f'
f();

// Because the method has now been saved into its own regular function, when we call that function, 'this' becomes undefined. This also gives us an error as the method uses 'this.year', which becomes 'undefined.year'.

// var firstName = `Matilda`; // var variables are added to the global object window. This is dangerous as it means 'this' keywords that point to the global object window amy access this variable unintentionally.

const jonas = {
  // Object literal, NOT a code block.
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // PRE-ES6 SOLUTION (SELF OR THAT VARIABLE)

    // const self = this;
    // A solution to 'this' being undefined in a function inside of a method, is to declare a variable normally called 'self' or 'that' outside of the function (where 'this' still points to jonas) and to then use that variable inside of the function. E.g. below:

    // const isMillennial = function () {
    //
    // Even though this is a function INSIDE of a method, it is still a regular function, and so therefore 'this' will still be undefined, NOT our object 'jonas'.

    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // ES6 SOLUTION
    const isMillennial = () => {
      // Arrow functions do not get their own 'this' keyword, so by using an arrow function, we bypass the need to save 'this' into a 'self' variable like the other solution above. Instead, the arrow function automatically goes to the parent scope.
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); //GLobal scoped, arrow function uses global window for 'this'.
  },
};

jonas.calcAge();
jonas.greet();
// console.log(this.firstName); // When we try to access a property that doesn't exist in a certain object, we do not get an error but simply 'undefined'. (Because of window object)

// An arrow function does not get its own 'this' keyword, it will use the 'this' keyword from its parent scope. The parent of our greet method is the global scope, which is why we get undefined.

// AS BEST PRACTICE: NEVER EVER USE AN ARROW FUNCTION FOR A METHOD!!

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); // Even though we only named/specified 2 arguments in the addExpr function, we can in fact pass more arguments through.

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); // Arrow functions do not get arguments keyword. Returns error.

--------------------------------------
PRIMITIVES VS OBJECTS(Reference types)
--------------------------------------

let age = 30;
let oldAge = age; // Set oldAge to age(30)
age = 31; // Does not affect oldAge variable.
console.log(age);
console.log(oldAge);

const me = {
  // Even though we used const, we can still manipulate the object because we're NOT changing the value at the memory address.
  name: "Jonas",
  age: 30,
};

const friend = me; // Copies me object into a new object called friend.
friend.age = 27; // age changes to 27 for both me AND friend object.
console.table("Friend:", friend);
console.table("Me:", me);


------------------------------------
PRIMITIVES VS OBJECTS IN PRACTICE
------------------------------------
*/
// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Remember it works this way because each primitive value will simply be saved into its own piece of memory in the stack.

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica; // Just copying reference, points to the same object.
// Note that const can be used here because what needs to be 'constant' is the value in the stack. In the stack, the value holds the reference to the object in the heap that we want to change. Therefore, we are making changes to the object, NOT the value.

marriedJessica.lastName = "Davis";
// console.log("Before marriage:", jessica);
// console.log("After marriage:", marriedJessica);
// Exactly the same object, same changes made to both identifiers.

// marriedJessica = {}; // Creating a new object will not work because we are creating it at a different position in memory and therefore the reference to that position in memeory will have to change in the variable. The variable is 'const' and is in the stack, we cannot change the value. Would work if we used 'let' however.

// Completely changing the object/assigning a new object to the variable is completely different to just changing a property like we did on line 260.

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
// To copy an object, we can use the 'assign' method. The assign method essentially merges 2 objects together. Below, we copy jessica2 over to an empty object and then store that object in 'jessicaCopy'.

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

// A new object was created in the heap and jessicaCopy is now pointing to that object. However, the 'assign' method only creates a 'shallow copy' of the object as it only works on a 'first-level'. Meaning that it will not copy over properties of objects within an object. To do so would require a 'deep clone'.

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
// An Array is an object, so here we're actually making changes to an object within an object.

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

// Even though we only 'pushed' extra elements to the jessicaCopy object, we see that both jessica2 and jessicaCopy have the family array with the addition of Mary and John. The arrays are the same.

// This is because the array 'family' is a deeply nested object and the assign method did not copy it over to the new object with a new reference. In essence, both objects have a property called 'family' that points to the same 'family' array/object in the memory heap.
