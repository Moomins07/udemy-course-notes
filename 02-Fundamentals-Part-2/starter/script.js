'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log('I can drive :D');


const interface = 'Audio';
const private = 534;

---------------------
FUNCTIONS
---------------------



function logger() {
    console.log(`My name is Jonas`)
}

logger(); // calling / running / invoking
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // Here we did not capture a value in a varible and instead just printed the result directly.

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


--------------------------------------
FUNCTION DECLARATIONS VS. EXPRESSIONS
--------------------------------------

[DECLARATIONS]

function calcAge1(birthYear) {
    const age = 2037 - birthYear; // Calculate age first
    return age; // And then we return that value
}

// The above can be re-written as the following

function calcAge1(birthYear) {
    return 2037 - birthYear; //This returns a value
}

const age1 = calcAge1(1991); //We capture that value by saving the function in a variable.
console.log(age1);


//[EXPRESSIONS]

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//Re-written as arrow function expression
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`));


---------------------------
FUNCTIONS CALLING FUNCTIONS
---------------------------

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces}  pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));


---------------------
REVIEWING FUNCTIONS
---------------------

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


// CODING CHALLENGE #1

const calcAverage = (score1, score2, score3) => {
    const avgScore = (score1 + score2 + score3) / 3;
    return avgScore
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win ${avgDolphins} vs ${avgKoalas}!`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win ${avgKoalas} vs ${avgDolphins}!`;
    } else return `No team wins!`;

}

checkWinner(avgDolphins, avgKoalas);

---------------------
ARRAYS INTRO
---------------------

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmetmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


---------------------
ARRAY OPERATIONS
---------------------

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); //Adds to end
console.log(friends);
console.log(newLength);

friends.unshift('John'); //Adds to beginning
console.log(friends);


// Remove elements
const popped = friends.pop(); //Removes last element
console.log(friends);
console.log(popped);

friends.shift(); //Removes first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));


if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}


---------------------
CODE CHALLENGE #2
---------------------

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

console.log(total);



---------------------
INTRO TO OBJECTS
---------------------

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

---------------------
DOT VS BRACKET NOTATION
---------------------

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.')

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends.')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

//challenge
//"Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

---------------------
OBJECT METHODS
---------------------

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // 

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);


// Challenge

console.log(jonas.getSummary());


---------------------
CODING CHALLENGE #3
---------------------


const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};


const john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

mark.calcBMI();
john.calcBMI();

console.log(john.bmi);
console.log(mark.bmi);


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${Math.round(mark.bmi)}) is higher than ${john.fullName}'s BMI (${Math.round(john.bmi)})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${Math.round(john.bmi)}) is higher than ${mark.fullName}'s BMI (${Math.round(mark.bmi)})`);
};



---------------------
ITERATION: THE FOR LOOP
---------------------


//console.log(`Lifting weights repetition 1`);

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition  ${rep}`);

}

----------------------------------------
LOOPING ARRAYS, BREAKING AND CONTINUNIG
----------------------------------------

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
//CONTINUE
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

//BREAK
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}


----------------------------------------
LOOPING BACKWARDS & LOOPS IN LOOPS
----------------------------------------

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];


for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}


for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`------- Starting exercise ${exercise} -------`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Lifting weights repetition ${rep}`);
    }
}

----------------------------------------
WHILE LOOP
----------------------------------------

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition  ${rep}`);

// }

let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Lifting weights repetition  ${rep}`);
    rep++
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`)
}


----------------------------------------
CODING CHALLENGE #4
----------------------------------------


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
}


for (let i = 0; i <= bills.length - 1; i++) {
    const tip = calcTip(bills[i]); //We save this to a variable to avoid repeating code
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);





const calcAverage = function (arr) {            // arr argument for generic array 
    let sum = 0;                               // Create sum variable in loop to be updated
    for (let i = 0; i <= arr.length - 1; i++) { // Generic for loop using arr argument
        sum += arr[i];                          // sum = sum + arr [i] sum updated each iteration.
    }
    return sum / arr.length;                    // function returns updated sum divided by length of array once loop finishes.          
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

for (let i = 0; i <= bills.length - 1; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i]
    }
    return sum / arr.length;

}

console.log(calcAverage(totals));