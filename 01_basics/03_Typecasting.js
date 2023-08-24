// In JS, Typecasting is VERY controversial
// How? Let's find out

// Typecasting Numbers
let number = 123
console.log(typeof(number)); // number

number = "123"
console.log(typeof number); // string

// Here begins the fun xD
let newNumber = Number(number)
console.log(typeof newNumber); // number; well and good till here

number = "123abc"
newNumber = Number(number) // Okay, Any sane language throws a typeError here, Python too does

console.log(typeof(newNumber)); // Says number, Now let's check it out

console.log(newNumber);// NaN; Not a Number; Why would you convert it in the first place then -_-
// So, NaN is type in JS whose type is a Number

// Wait, There's even more
number = null

newNumber = Number(number) // Oh lord it converted a null value
console.log(newNumber); // 0; This is just pure insanity jS wtf

// Be extremely careful while typecasting numbers in JS!

// Typecasting strings

let someNumber = 33
let someString = String(33) // Prints 33 and type is string

console.log(typeof someString , someString);

// Typecasting booleans
//This is same as python, just use Boolean() to convert




