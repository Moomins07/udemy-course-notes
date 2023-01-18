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


-------------------------------------------
INHERITANCE BETWEEN "CLASSES": ES6 CLASSES
-------------------------------------------

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first! (super sets 'this' keyword)
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // This calcAge function overwrites the calcAge function is the PersonCl because
  // this method appears first in the prototype chain.
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


---------------------------------------------
INHERITANCE BETWEEN "CLASSES": Object.create
---------------------------------------------
// This method of linking prototypes is less common but is a method of linking objects to other objects
// without 'faking' classes in JavaScript. 

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

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


---------------------------------------------
ANOTHER CLASS EXAMPLE
---------------------------------------------

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
// console.log(acc1);

// acc1.movements.push(250);  BAD PRACTICE, BETTER TO USE FUNCTIONS AS SEEN BELOW
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000)

console.log(acc1);

console.log(acc1.pin);


---------------------------------------------
ENCAPSULATION: Protected Properties & Methods
---------------------------------------------

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;

    //  protected property
    this._movements = []; // The underscore displays to your team that it should not be manipulated

    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
// console.log(acc1);

//acc1._movements.push(250); //BAD PRACTICE, BETTER TO USE FUNCTIONS AS SEEN BELOW
//acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);

------------------------------------------------
ENCAPSULATION: Private class fields and Methods
------------------------------------------------

// Class fields are a potential ne addition to JavaScript that will allow us to
// use Classes similar to that of Java and C++ with true privacy and not a 'convention
// Work around as we have used in above examples.

// In the proposal to add Class fields to JS, there are 8 different kinds of fields and methods. (We will only be exploring 4 of them here)

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version of all of the above )

class Account {
  // 1) Public fields (NOT IN PROTOTYPE, IN EVERY INSTANCE)
  locale = navigator.language;

  // 2) Private fields (NOT IN PROTOTYPE, IN EVERY INSTANCE)
  #movements = [];
  #pin; // sets an undefined variable for pin that is updated below inside constructor

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //  protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // returns current object('this')
    // We need a value returned so that we can chain methods, otherwise returns undefined
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    // static method, only works on the class itself (good for helper functions)
    console.log('Helper');
  }

  // 4) Private methods (Currently not supported by any browser)
  // #approveLoan(val) {
  _approveLoan() {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
// console.log(acc1);

//acc1._movements.push(250); //BAD PRACTICE, BETTER TO USE FUNCTIONS AS SEEN BELOW
//acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements); Returns error as movements is now private and cannot
// be accesssed outside of the enclosed class.

// console.log(acc1.#pin); Also will not work as pin is a private field.

// console.log(acc1.#approveLoan()); Also will not work as method is private.

// CHAINING
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

------------------------------------------------
CODING CHALLENGE #4
------------------------------------------------
*/

class CarCl {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }

  get speedUS() {
    return this.currentSpeed / 1.6;
  }

  set speedUS(currentSpeed) {
    this.currentSpeed = currentSpeed * 1.6;
  }

  brake() {
    this.currentSpeed -= 5;
    console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge; // Private - Undefined variable updated below
  constructor(make, currentSpeed, charge) {
    super(make, currentSpeed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.currentSpeed += 20;
    this.#charge--;
    console.log(
      `Tesla is going at ${this.currentSpeed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const tesla = new EVCl('Tesla', 120, 23);

tesla
  .accelerate()
  .accelerate()
  .chargeBattery(50)
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .brake()
  .accelerate();
console.log(tesla.speedUS);
