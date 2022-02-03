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


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log(`I am ` + 23 + ` years old`);
console.log(`23` - `10` - 3);
console.log(`23` * `2`);


let n = '1' + 1;
n = n - 1;
console.log(n);



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

*/

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


