// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
const birthYear = 2022;

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1981));


// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do when one occurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    // if curTemp is not a number, skip that iteration
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitude([3, 7, 4, 1, 8]);
//max = the first element of array ([0]) which in this case would be 3. max = 3.
//the loop then iterates from 0 > length of array.
//each iteration, if statement checks to see if array[i] is greater than max, if it is, max is re-assigned that value.

//min works the exact same way except now we check if the next element in the loop iteration is less than min's assigned value.

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    // if curTemp is not a number, skip that iteration
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',

    // Step 3: FIX
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // Step 2: FIND
  console.table(measurement);

  //console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// Step 1: IDENTIFY
console.log(measureKelvin());

// using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    // if curTemp is not a number, skip that iteration
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// Step 1: IDENTIFY
console.log(amplitudeNew);

-----------------------------------
CODING CHALLENGE 1
-----------------------------------

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// WORKS BUT DOESN'T LOG STRING ON ONE LINE ONLY
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let daysString = ' ';
    let days = [i + 1];
    days == 1 ? (daysString = 'day') : (daysString = 'days');
    console.log(`...${arr[i]}°C in ${days} ${daysString}.`);
  }
  console.log('-------------------------------');
};

printForecast(data1);
printForecast(data2);
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//LOGS STRING ON SINGLE LINE BY UPDATING EMPY str VARIABLE EACH ITERATION
const printForecast = function (arr) {
  let str = ' '; //empty string to update in loop
  for (let i = 0; i < arr.length; i++) {
    let daysString = ' '; // empty variable for ternary operator
    let days = [i + 1]; //counter variable
    days == 1 ? (daysString = 'day') : (daysString = 'days'); //makes 1 = 'day' not 'days'
    str += `${arr[i]}°C in ${[i + 1]} ${daysString} ... `; //empty str variable that is updated each loop iteration; This puts is how we get all strings on one line.
  }
  console.log('...' + str); //add single ellipsis at beginning
};

printForecast(data1);
//printForecast(data2);
