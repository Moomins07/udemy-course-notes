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

*/

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
