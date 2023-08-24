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

/* ********************************** OPERATIONS *************************************** */

let str1 = "String1"
let str2 = "String2"

str3 = str1 + " " + str2
console.log(str3);

// Things get weird when JS is the language -_-

console.log(1 + 2); // 3
console.log(1 + 1 + "2" , typeof(1 + 1 + "2"));  // Concatenating numbers with strings? Possible. Check the priority of the operations though

// Let me confuse you now

console.log("2" + 1 + 1) // Now it doesn't add

//similarly
console.log(+true); // prints 1
console.log(+"") // prints 0

// The reason behind this is operator precedence, Some operators are treated with higer priority and earlier than other opearators

// The same behaviour is followed here

let counter = 100

console.log(counter++ , ++counter); // A perfect example of prefix and postfix operation
// Counter ++ delays to show the result as long as console.log is not finished executing
// But ++counter is performed on the incremented count of 100 i.e. 101, A brilliant example!

// Read more about this on MDN Docs JS prefix postfix

