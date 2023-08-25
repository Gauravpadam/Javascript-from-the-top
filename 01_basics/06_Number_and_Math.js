// There are two ways to declare a number in js

const number = 444 // This defines a number
console.log(number);

// Here's an example of declaring number as an object

const balance = new Number(444)
console.log(balance);

// This defines a new object of type number

// Let's start manipulating our number object
console.log(balance.toString().length); // Converts a number to string and checks the string's length

console.log(typeof balance.toFixed(2)); // Rounds off the number to a specified number of decimals and returns a string

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4)); // This is interesting, Why would I use toPrecision if I already have toFixed?
// Everything is same in toPrecision and toFixed, Except one major difference,
// toFixed rounds up decimals to provided argument and toPrecision gives all the significant bits after rounding up

// output of the above statement is 23.90

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // Converts number to a string In US format

console.log(hundreds.toLocaleString('en-IN')); // Converts number to a string In Indian format

// ************************ Math ***********************

console.log(Math); // It is an object
console.log(Math.abs()); // Delivers the absolute value in JS
console.log(Math.round(4.3));
console.log(Math.ceil(4.3))
console.log(Math.floor(4.9))

console.log(Math.random()); // Always gives a number between 0 and 1
console.log((Math.random()*10) + 1) // Can be used as a random value generator

// Let's tweak the random as use case

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Delivers a random value within the range of max and min