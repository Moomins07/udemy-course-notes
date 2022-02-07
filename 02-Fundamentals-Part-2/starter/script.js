'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log('I can drive :D');


const interface = 'Audio';
const private = 534;
*/

function logger() {
    console.log(`My name is Jonas`)
}

logger(); // calling / running / invoking
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

fruitProcessor(5, 0);