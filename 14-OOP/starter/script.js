'use strict';

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never put methods inside a constructor function!!
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// The 4 steps of 'new'
// 1. New empty object '{}' is created
// 2. The function is called, 'this' keyword points to this new empty object {}
// 3. The new empty object is linked to prototype
// 4. The function automatically returns the new empty object {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes
console.log('-------- Prototypes ----------');

console.log(Person.prototype);

// Every object created using our Person constructor function can now use the calcAge method.
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
// The constructor functions do not get their own prototype! The prototype only applies to the objects that are created using the constructor function. E.g. Our 'jonas' object above. See below.

console.log(Person.prototype.isPrototypeOf(jonas)); // true -- jonas object's prototype IS a prototype of Person
console.log(Person.prototype.isPrototypeOf(Person)); // false -- Person is our constructor function and does not have its own prototype!

// We can think of the 'prototype' property as 'prototypeOfLinkedObjects, as in, prototype of the objects created using that constructor function.

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // jonas' object has own property of firstName so returns 'true'

console.log(jonas.hasOwnProperty('species')); // jonas' object does NOT have own property of 'species'. 'species' is stored in the prototype. Returns 'false'

console.log(jonas.__proto__);

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // Object.prototype (null)

console.dir(Person.prototype.constructor); // Points back to our constructor function

const arr = [3, 6, 4, 6, 9, 8]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // returns true -- arr inherits methods from Array constructor prototype

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
// Fun experiment to show that we can add new array methods to the Array.prototype that we can call on any array, but not good practice in actual work environment. This is because JavaScript could potentially add a method with the same name to the Array.prototype in the future which will break our code.
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir((x) => x + 1);

-----------------------------------------
CODING CHALLENGE #1
-----------------------------------------

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `The ${this.make} accelerates, and is now travelling at ${this.speed} km/h`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `The ${this.make} brakes, and is now travelling at ${this.speed} km/h`
  );
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// console.log(car1);
// console.log(car2);

car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();


-----------------------------------------
ES6 CLASSES
-----------------------------------------


class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

//  NOTES ABOUT CLASSES
// 1. Classes are NOT hoisted, even if they are declarations
// 2. CLasses are first-class citizens, we can pass them into functions and return them from functions. That is because Classes are a special kind of function behind the scenes.
// 3. Classes are executed in strict-mode.

-----------------------------------------
GETTERS & SETTERS
-----------------------------------------


const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // any setter method needs to have exactly ONE parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

// the get keyword allows us to read the method like a property, as you can see in the example above.

account.latest = 50;
console.log(account.movements);

// once again, because of the set keyword, our method becomes a property and allows us to set properties as we would any other object property. Example above. This is how getters and setters work in regular objects.

//------------------------------------------------
// We can also use getters and setters in Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' '))
      this._fullName = name; // We use _fullName to avoid naming conflict
    else alert(`${name} is not a full name!`);

    // sets 'fullName' argument to _fullName if the name includes a space
  }

  get fullName() {
    return this._fullName;

    // Sets _fullName back to fullName
  }

  // STATIC METHOD CREATED INSIDE OF CLASS
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

// STATIC METHOD CREATED OUTSIDE OF CLASS
// PersonCl.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.log(jessica.age);

PersonCl.hey();

// Static methods are not added to the prototype / new object instances and are used mostly to create helper functions related to the constructor function.

// The get keyword works exactly the same here except now we are using it in a class.

// As senn in the example above, getters and setters can be very useful for data validation.


-----------------------------------------
OBJECT.CREATE
-----------------------------------------

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steve';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(
      `The ${this.make} accelerates, and is now travelling at ${this.speed} km/h`
    );
  }
  brake() {
    this.speed -= 5;
    console.log(
      `The ${this.make} brakes, and is now travelling at ${this.speed} km/h`
    );
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford);

ford.accelerate();
ford.brake();
ford.brake();

console.log(ford.speedUS);


-----------------------------------------
INHERITANCE BETWEEN CLASSES
-----------------------------------------

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // Inherit from Person.prototype

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

const bob = new Person('bob', 2020);
console.log(bob);
bob.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


-----------------------------------------
CODING CHALLENGE #3
-----------------------------------------
*/
const Car = function (make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
};

const EV = function (make, currentSpeed, charge) {
  Car.call(this, make, currentSpeed);
  this.charge = charge;
};

// Link prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.accelerate = function () {
  this.currentSpeed += 20;
  this.charge--;
  console.log(
    `Tesla is going at ${this.currentSpeed} km/h, with a charge of ${this.charge}`
  );
};

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 23);

console.dir(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
