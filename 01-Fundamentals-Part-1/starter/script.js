/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);


let firstName = 'Jonas';
console.log(firstName);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);


let year;   // undefined variable
console.log(year);
console.log(typeof year); // typeof variable is undefined

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;



// --------------------
//   Math operators
// --------------------

const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);


const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// --------------------
// Assignment operators
// --------------------

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);


// --------------------
// Comparison operators
// --------------------

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(currentYear - 1991 > currentYear - 2018);


const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;

console.log(currentYear - 1991 > currentYear - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);


const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple\n\
lines');

console.log(`String
multiple
lines`);



const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving.`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah cannot drive for ${yearsLeft} more years. :(`);
}

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

--------------------------
// CODING CHALLENGE 1/2
--------------------------
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = Math.floor(markWeight / markHeight ** 2);
console.log(Math.floor(markBMI));
const johnBMI = Math.floor(johnWeight / johnHeight ** 2);
console.log(Math.floor(johnBMI));

const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's!`)
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's!`)
}

--------------------
// TYPE CONVERSION
--------------------
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

--------------------
// TYPE COERCION
--------------------
console.log(`I am ` + 23 + ` years old`);
console.log(`23` - `10` - 3);
console.log(`23` * `2`);


let n = '1' + 1;
n = n - 1;
console.log(n);

--------------------
// TRUTHY AND FALSY
--------------------

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log(`Don't spend it all.`);
} else {
    console.log(`You should get a job.`);
}

let height;
if (height) {
    console.log('YAY! Height is defined!')
} else {
    console.log('Height is undefined.')
}

--------------------
// EQUALITY OPERATORS
--------------------

const age = 18;
if (age === 18) console.log(`You just became an adult. (strict)`);

if (age == 18) console.log(`You just became an adult. (loose)`);

const favouriteNumber = Number(prompt(`What is your favourite number?`));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);


// The number stored in the variable favouriteNumber prompt is stored as a string.
// if (favouriteNumber == 7) {
//     console.log(`Cool, 7 is an amazing number!`);
// }
// '7' == '23'  loose equality operator returns this true.


// wrapped favouriteNumber prompt in Number() function so that numbers are not strings.
if (favouriteNumber === 23) {
    console.log(`Cool, 23 is an amazing number!`);
} else if (favouriteNumber === 7) {
    console.log(`7 is also a cool number!`)
} else if (favouriteNumber === 9) {
    console.log(`9 is a great number.`)
} else {
    console.log(`Number is not 23 or 7.`)
}
// Number() makes this 7 a number and so we can use strict equality operators to make the condition true.

if (favouriteNumber !== 23) console.log(`Why not 23?`);

--------------------
// LOGICAL OPERATORS
--------------------

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive...`);
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`)
} else {
    console.log(`Someone else should drive...`);
}


--------------------
// CODING CHALLENGE #3
--------------------

const dolphinsAvgScore = Math.round((96 + 108 + 102) / 3)
console.log(dolphinsAvgScore);
const koalasAvgScore = Math.round((88 + 91 + 126) / 3)
console.log(koalasAvgScore);


if (dolphinsAvgScore > koalasAvgScore) {
    console.log(`Dolphins win with an average score of ${dolphinsAvgScore}!`);
} else if (dolphinsAvgScore === koalasAvgScore) {
    console.log(`Dolphins and Koalas draw!`)
} else
    console.log(`Koalas win with an average score of ${koalasAvgScore}!`);





const dolphinsAvgScoreBonus1 = Math.round((97 + 112 + 86) / 3);
const koalasAvgScoreBonus1 = Math.round((109 + 95 + 80) / 3);
console.log(dolphinsAvgScoreBonus1);
console.log(koalasAvgScoreBonus1);

if (dolphinsAvgScoreBonus1 >= 100 && dolphinsAvgScoreBonus1 > koalasAvgScoreBonus1) {
    console.log(`Dolphins win with a score of ${dolphinsAvgScoreBonus1}`);
} else if (koalasAvgScoreBonus1 >= 100 && koalasAvgScoreBonus1 > dolphinsAvgScoreBonus1) {
    console.log(`Koalas win with a score of ${koalasAvgScoreBonus1}`);
} else if (dolphinsAvgScoreBonus1 >= 100 && koalasAvgScoreBonus1 >= 100 && dolphinsAvgScoreBonus1 === koalasAvgScoreBonus1) {
    console.log(`It's a draw!`)
} else
    console.log("Noone wins the trophy!")

    
--------------------
// SWITCH STATEMENT
--------------------

const day = `thursday`;

switch (day) {      // day === `monday` if true code executed.
    case `monday`:
        console.log(`Plan course structure.`);
        console.log(`Go to coding meetup.`)
        break;
    case `tuesday`:
        console.log(`Prepare theory videos.`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples.`);
        break;
    case `friday`:
        console.log(`Record videos.`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend!`);
        break;
    default:
        console.log(`Not a valid day!`);
}


// switch statement re-written below as if...else statement.
const day = 'wednesday';

if (day === `monday`) {
    console.log(`Plan course structure.`);
    console.log(`Go to coding meetup.`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos.`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples.`);
} else if (day === `friday`) {
    console.log(`Recording videos.`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`Enjoy the weekend!`);
} else console.log(`Not a valid day!`);


------------------------------
// Statements and Expressions
------------------------------


3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = `23 is bigger`;
}

console.log(`I'm ${2037 - 1991} years old`);

// Refer to notes 'statements and expressions' for more context.

------------------------------
// Ternary Operator
------------------------------


const age = 23;
age >= 18 ? console.log(`I like to drink wine.`) : console.log(`I like to drink water.`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

------------------------------
// Coding Challenge #4
------------------------------

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

console.log(`The bill was ${bill}, the tip was ${tip}, and the final value was ${bill + tip}.`)
*/

